import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let a = this.props.published; // string

    let d = new Date(a); // a --> convert kiye in date object.

    let date = d.toGMTString(); // jo date mila usko format m change kr diye.

    return (
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <span
            className={`position-absolute top-0  translate-middle badge  bg-${this.props.color}`}
            style={{ zIndex: "1", left: "85%" }}
          >
            {this.props.source}
          </span>
          <img
            src={this.props.imgurl}
            className="card-img-top"
            alt="Browser not supported."
            style={{ height: "12.5rem" }}
          />

          <p className="card-text my-2 mx-2">
            {" "}
            <strong>Author :- </strong>{" "}
            {this.props.author === null ? "Unknown" : this.props.author}{" "}
          </p>

          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>

            <p className="card-text text-secondary">
              {" "}
              <strong>Date :- {date}</strong>{" "}
            </p>

            <a
              href={this.props.newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-success"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
