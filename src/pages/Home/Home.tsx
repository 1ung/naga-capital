import React, { useState, useEffect } from "react";

function Home(props: any) {
  return (
    <div className="container-fluid Home">
      <div className="row home-row">
        <div className="col-md-2 col-sm-1" />
        <div className="col-md-8 col-sm-10">
          <div className="animated-title">
            <div className="text-top">
              <div>
                <h1 className="intro-text">We Set Your Life Thinking</h1>
                <h1 className="intro-text">Build Your Investment With Us.</h1>
              </div>
            </div>
            <div className="text-bottom">
              <div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg home-btn"
                >
                  <a href="/contact-us" className="learn-more-link">
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-1" />
      </div>
    </div>
  );
}

export default Home;
