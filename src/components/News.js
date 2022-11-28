import style from "../index.css"
import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {

    const[articles, setArticles] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

//in place of componentDidMount
useEffect(() => {
    document.title = `NewsMonkey - ${capitalizeFirstLetter(props.category)}`
    updateNews()
    }, [])



    const updateNews = async () => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(40)
        let parsedData = await data.json()
        console.log(parsedData)
        props.setProgress(75)

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)

    }

    const handleNextClick = async () => {
        console.warn("Went on next page")
        setPage(page + 1)
        updateNews()
    }


    const handlePrevClick = async () => {
        console.warn("Previous")
        setPage(page - 1)
        updateNews()
    }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`
        setPage(page+1)
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.articles)
    };




    return (
        <>
            <h1 className='text-center' style={{ margin: '35px 0px' ,marginTop: "75px" }}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >

                <div className="container">
                    <div className="row">

                        {articles.map((elements) => {

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

News.defaultProps = {
    country: 'in',
    pageSize: 8
}

News.propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired
}


export default News