import React from "react";

import "./About.css";

import NavBar from "./NavBar";

import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <NavBar ></NavBar>

      <section id="about-section" className="pt-5 pb-5">
        <div className="container wrapabout my-1">
          <div className="red"></div>
          <div className="row">
            <div className="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
              <div className="blockabout">
                <div className="blockabout-inner text-center text-sm-start">
                  <div className="title-big pb-3 mb-3">
                    <h3 style={{ textDecoration: "underline" }}>ABOUT</h3>
                  </div>
                  <p className="description-p text-muted pe-0 pe-lg-0">
                    Welcome to <strong>Updates Today</strong>, your go-to source
                    for the latest news from around the globe. We strive to keep
                    you informed about the most relevant and up-to-date stories
                    in{" "}
                    <strong>
                      11 different countries across 7 diverse categories
                    </strong>
                    .
                  </p>
                  <p className="description-p text-muted pe-0 pe-lg-0">
                    Through <strong>News API</strong>, we bring you breaking
                    news, insightful articles, and in-depth analysis from
                    various industries.
                  </p>
                  <p className="description-p text-muted pe-0 pe-lg-0">
                    At Updates Today, we aim to provide you with a well-rounded
                    and diverse news experience. Whether you're interested in
                    business, entertainment, health, science, sports,
                    technology, or general news, we've got you covered.
                  </p>
                  <div className="sosmed-horizontal pt-3 pb-3">
                    <a href="https://www.linkedin.com/in/piyush-sharma-0975b3232/">
                      <i className="fa fa-linkedin mx-3"></i>
                    </a>
                    <a href="https://github.com/magneto-09">
                      <i className="fa fa-github mx-3"></i>
                    </a>
                  </div>
                  <Link to="/" className="btn rey-btn mt-3">
                    See More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <figure className="potoaboutwrap">
                <img className="img-size" src="assests\about-image.png" alt="Updates Today logo" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
