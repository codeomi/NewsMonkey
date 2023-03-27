# NewsMonkey - News App
 This is a news application built using React that allows users to search for news articles by keyword. The application uses the News API to retrieve news articles from various sources.

## Installation
* **Clone the repository:** `git clone https://github.com/codeomi/NewsMonkey.git`
* **Navigate to the project directory:** `cd react-news-application`
* **Install dependencies:** `npm install`
* **Start the development server:** `npm start`
* **Open http://localhost:3000 in your browser to view the application**

## Features
* Search for news articles by keyword
* Filter news articles by source
* Sort news articles by date or relevance
* Pagination of search results
* Responsive design

## Technologies Used
* React
* News API
* Axios
* Bootstrap

### API Key
This application requires an API key from [News API](https://www.newsapi.ai/). You can obtain a free API key by registering on the News API website. Once you have obtained an API key, create a .env file in the root directory of the project and add the following line:
`REACT_APP_NEWS_API`=<your-api-key>

## Usage
To search for news articles, enter a keyword in the search bar and click the "Search" button. The application will retrieve news articles from various sources and display them in a list. You can filter the news articles by source using the dropdown menu, and sort them by date or relevance using the sorting buttons. To view the full article, click on the article's title or image.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.
