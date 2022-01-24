import React, { Component } from "react";
import PropTypes from "prop-types";
import newsThumbnail from '../assets/images/news-thumbnail.jpg'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <>
        <div className="card ">
          <div className="position-relative">
            <img
              src={imageUrl?imageUrl:newsThumbnail}
              className="img-fluid img-news"
              alt={description}
            />
            <span className="position-absolute badge rounded-pill bg-danger" style={{left:'10px',bottom:'10px'}}>
              {source}
            </span>
          </div>
          <div className="card-body d-flex flex-column justify-content-between" style={{height:"224px"}}>
            <div className="news-title mb-2">{title}</div>
            <div className="news-desc">{description}</div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <a href={newsUrl} target="_blank">
                View Details
              </a>
              <div className="d-flex flex-column align-items-end">
                <div className="small">{author}</div>
                <div className="small">{new Date(date).toUTCString()}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
