import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=280b8acbf03041119db6b99f6a058099&page=1&pagesize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ 
            articles: parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
         })
    }

    // }
    // componentDidMount() {
    //     let url= `http://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&apiKey=280b8acbf03041119db6b99f6a058099`
    //     axios.get(url)
    //     .then(result=>{

    //         console.log(result.data)
    //         this.setState=({articles:result.data.message.body.articles})
    //         console.log(this.articles)
    //     })
    //     .catch(err=>console.log("error"))
    // }

    handleNextClick = async () => {
        console.warn("Went on next page")
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
        {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=280b8acbf03041119db6b99f6a058099&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
            this.setState({loading:true})
            let data = await fetch(url)
            let parsedData = await data.json()
            console.log(parsedData)
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false
            })
        }
    }
    handlePrevClick = async () => {
        console.warn("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=280b8acbf03041119db6b99f6a058099&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })
    }


    render() {
        console.log("render")
        
        return (
            <div className='container my-3'>
                <h1 className='text-center'>Top Headlines</h1>
                <div className="row">
                    {this.state.loading && <Spinner/>}
                    {!this.state.loading && this.state.articles.map((elements) => {

                        return <div className='col-md-4' key={elements.url}>
                            <NewsItem title={elements.title ? elements.title.slice(0, 45) : " "} description={elements.description ? elements.description.slice(0, 88) : " "} imageUrl={elements.urlToImage ? elements.urlToImage : " "} newsUrl={elements.newsUrl ? elements.url : " "} />
                        </div>

                    })}
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&#8592; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &#8594;</button>

                    </div>


                </div>
            </div>

        )
    }
}

export default News