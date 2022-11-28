import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date } = props
    return (

        <div className='my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={!imageUrl ? "https://c1.wallpaperflare.com/preview/94/913/153/urgently-the-gap-message-note-news.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-secondary">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem