import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

export class News extends Component {
    static defaultProps={
        country:"in",
        pageSize:8,
        category:"general"
    }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a2fea578eaf4a7199ec74e504368390&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading:false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    this.updateNews();
    this.setState({page:this.state.page+1})
  };

  handlePreviousClick = async () => {
    this.updateNews();
    this.setState({page:this.state.page-1})
  };

  render() {
    return (
      <div className="container">
        {!this.state.loading && (
          <>
            <div className="row">
              {this.state.articles.map((element, index) => (
                <div className="col-md-4 my-3" key={index}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <button
                className="btn btn-sm btn-dark"
                onClick={this.handlePreviousClick}
                disabled={
                  this.state.page - 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
                }
              >
                Previous
              </button>

              <button
                className="btn btn-sm btn-dark"
                onClick={this.handleNextClick}
                disabled={
                  this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
                }
              >
                Next
              </button>
            </div>
          </>
        )}
        {this.state.loading && (
          <div className="d-flex align-items-center justify-content-center loader-wrapper">
            {/* <div className="loader"></div> */}
            <Loader />
          </div>
        )}
      </div>
    );
  }
}

export default News;
