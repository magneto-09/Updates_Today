import React, { Component } from "react";

import NewsItem from "./NewsItem";

import Loader from "./Loader";

import PropTypes from "prop-types";

export default class News extends Component {
  // *******************************************
  // props
  static defaultProps = {
    category: "general",
    country: "in",
    color: "warning",
  };

  // proptype
  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  // *******************************************

  // will have to use this to create state in rcc.
  constructor() {
    super();

    this.state = {
      article: [],
      loading: false,
      page: 1, // by default rehta h.
    };
  }

  // when api fetch hoga toh totalresult ka value toh change nhi hoga chahe kitni baar v call ho.
  totalResult = 0;

  // life cycle method & yeh render() funcn k run krne k baad chlega....
  async componentDidMount() {
    // loading ko true krna hoga jisse spinner dikhe
    this.setState({ loading: true });

    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c591f87af0834cf890ebf9abbf26cac7&pageSize=${this.props.pageSize}&page=1`
    );

    // if response status is false then it will throw an error regarding status.
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    let parsedData = await response.json();

    // console.log(parsedData);

    this.totalResult = parsedData.totalResults; // value update kr diye. yeh change nhi hoga chahe kitna baar
    // v api call ho.  isiliye isko state ka hissa nhi bna rhe h.

    // now once we got the json data we have to change the state
    this.setState({
      article: parsedData.articles,
      loading: false,
    });
  }

  // ******************************* next btn & prev btn ********************************

  nextBtn = async () => {
    // console.log("nxtBtn");

    this.setState({ loading: true });

    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=c591f87af0834cf890ebf9abbf26cac7&pageSize=${
        this.props.pageSize
      }&page=${this.state.page + 1}`
    );

    // if response status is false then it will throw an error regarding status.
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    let parsedData = await response.json();

    // console.log(parsedData);

    // now once we got the json data we have to change the state

    this.setState({
      page: this.state.page + 1,
      article: parsedData.articles,
      loading: false,
    });
  };

  prevbtn = async () => {
    // console.log("prevbtn");

    // loading true krne se spinner dikhega
    this.setState({ loading: true });

    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=c591f87af0834cf890ebf9abbf26cac7&pageSize=${
        this.props.pageSize
      }&page=${this.state.page - 1}`
    );

    // if response status is false then it will throw an error regarding status.
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    let parsedData = await response.json();

    // console.log(parsedData);

    // now once we got the json data we have to change the state

    this.setState({
      page: this.state.page - 1,
      article: parsedData.articles,
      loading: false,
    });
  };

  // *************************************************************************************

  // hashmap create kr rhe h jisse country code k according country naam rakh sake
  hashmap = new Map([
    ["in", "India"],
    ["us", "US"],
    ["au", "Australia"],
    ["br", "Brazil"],
    ["cn", "China"],
    ["fr", "France"],
    ["il", "Israel"],
    ["jp", "Japan"],
    ["kr", "Korea"],
    ["tw", "Taiwan"],
    ["gb", "UK"],
  ]);

  // ********************************************************

  render() {
    return (
      <div className="my-3">
        {/* ***********************************headline******************** */}


        <h2 className={`my-3  text-center text-${this.props.color}`}>
          {" "}
          NewsMonkey -{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{" "}
          Top Headlines of "{this.hashmap.get(this.props.country)}"
        </h2>

        <hr
          className={`my-3 text-${this.props.color}`}
          style={{
            width: "52rem",
            margin: "0 auto 0",
            borderStyle: "hidden hidden solid",
            borderWidth: "0.5rem",
          }}
        ></hr>

        {/* *********************************************************************** */}

        {this.state.loading && <Loader></Loader>}

        {/* wrong */}
        {/* {if (this.state.loading) {
            <Loader></Loader>
          }} */}

        <div className="row">
          {/* **************************************************************************************** */}
          {/* 1st headline */}
          {/* <div className="col-md-3">
              <NewsItem
                title="News1"
                description="We will put this mf"
                imgurl=" https://images.indianexpress.com/2023/03/cold_200_pexels.jpg"
              ></NewsItem>
            </div> */}

          {/* This was given 4 times */}
          {/* **************************************************************************************** */}

          {/* looping an array inside JSX syntax */}
          {
            // take out array which you want to traverse...then will use map method to traverse...
            !this.state.loading &&
              this.state.article.map((element) => {
                return (
                  <div className="col-md-3 my-3" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgurl={
                        element.urlToImage === null
                          ? "https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1024-512.png"
                          : element.urlToImage
                      }
                      newsUrl={element.url}
                      author={element.author}
                      published={element.publishedAt}
                      source={element.source.name}
                      color={this.props.color} // this comes from app.js component
                    ></NewsItem>
                  </div>
                );
              })
          }
        </div>

        {/* ************************button le k aao prev & next ************************ */}
        {!this.state.loading && (
          <div className=" my-2 d-flex justify-content-between">
            <button
              type="button"
              className=" mx-3 btn btn-primary"
              onClick={this.prevbtn}
              disabled={this.state.page === 1}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className=" mx-3 btn btn-primary"
              onClick={this.nextBtn}
              disabled={
                this.state.page ===
                Math.ceil(this.totalResult / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        )}
        {/* ************************************************************************* */}
      </div>
    );
  }
}
