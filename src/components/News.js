import React, { Component } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'

export class News extends Component {

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
    }

    async componentDidMount() {
        console.log("cdm")
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=280b8acbf03041119db6b99f6a058099&page=1"
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles })
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
        console.log("next")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=280b8acbf03041119db6b99f6a058099&page=${this.state.page + 1}&pagesize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
    handlePrevClick = async () => {
        console.warn("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=280b8acbf03041119db6b99f6a058099&page=${this.state.page - 1}&pagesize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }


    render() {
        console.log("render")
        return (
            <div className='container my-3'>
                <h1>Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((elements) => {

                        return <div className='col-md-4' key={elements.url}>
                            <NewsItem title={elements.title ? elements.title.slice(0, 45) : " "} description={elements.description ? elements.description.slice(0, 88) : " "} imageUrl={elements.urlToImage ? elements.urlToImage : " "} newsUrl={elements.newsUrl ? elements.url : " "} />
                        </div>

                    })}
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&#8592; Previous</button>
                        <button type="button" class="btn btn-dark" onClick={this.handleNextClick}> Next &#8594;</button>

                    </div>


                </div>
            </div>

        )
    }
}

export default News