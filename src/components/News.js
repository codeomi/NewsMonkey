import style from "../index.css"
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {

    defaultProps = {
        country: 'in',
        pageSize: 8
    }

    PropTypes = {
        country: PropTypes.string.isRequired,
        pageSize: PropTypes.number.isRequired
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            totalResults: 0,
            loading: true
        }

        document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`
    }


    async componentDidMount() {
        console.log("cdm")
        this.updateNews()
    }

    async updateNews(pageNo) {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6ca882ddac54102b763e21a0dfbcc66&page=${this.state.page}&pagesize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(40)
        let parsedData = await data.json()
        console.log(parsedData)
        this.props.setProgress(75)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)

    }

    handleNextClick = async () => {
        console.warn("Went on next page")
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }


    handlePrevClick = async () => {
        console.warn("Previous")
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6ca882ddac54102b763e21a0dfbcc66&page=${this.state.page}&pagesize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })

    };

    render() {
        console.log("render")

        return (
            <>
                <h1 className='text-center' style={{ margin: '35px 0px' }}>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >

                    <div className="container">
                        <div className="row">

                            {this.state.articles.map((elements) => {

                                return <div className='col-md-4' key={elements.url}>
                                    <NewsItem title={elements.title ? elements.title.slice(0, 45) : " "} description={elements.description ? elements.description.slice(0, 88) : " "} imageUrl={elements.urlToImage ? elements.urlToImage : " "} newsUrl={elements.newsUrl ? elements.url : " "} author={elements.author ? elements.author : "Anonymous"} date={elements.publishedAt} />
                                </div>

                            })}

                        </div>
                    </div>

                </InfiniteScroll>
            </ >
        )
    }
}

export default News