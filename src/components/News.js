import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - Monkey News`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=2a2fea578eaf4a7199ec74e504368390&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(false);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  // const handleNextClick = async () => {
  //   updateNews();
  //   setPage(page + 1)
  // };

  // const handlePreviousClick = async () => {
  //   updateNews();
  //   setPage(page - 1)
  // };

  return (
    <div className="py-3" style={{ marginTop: "80px" }}>
      <h2 className="container">
        Top Headlines - {capitalizeFirstLetter(props.category)}
      </h2>
      {loading && (
        <div className="loader-wrapper">
          <Loader />
        </div>
      )}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles !== totalResults}
        loader={<Loader />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => (
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
        </div>
      </InfiniteScroll>
      {/* <div className="d-flex align-items-center justify-content-between">
          <button
            className="btn btn-sm btn-dark"
            onClick={handlePreviousClick}
            disabled={
              state.page - 1 >
              Math.ceil(state.totalResults / props.pageSize)
            }
          >
            Previous
          </button>

          <button
            className="btn btn-sm btn-dark"
            onClick={handleNextClick}
            disabled={
              state.page + 1 >
              Math.ceil(state.totalResults / props.pageSize)
            }
          >
            Next
          </button>
        </div> */}

      {/* {state.loading && (
          <div className="d-flex align-items-center justify-content-center loader-wrapper">
            <Loader />
          </div>
        )} */}
    </div>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
