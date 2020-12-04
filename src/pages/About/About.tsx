import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";

function About(props: any) {
  return (
    <>
      <div className="container About">
        <div className="row pt-5">
          <div className="col-md-2 col-sm-1" />
          <div className="col-md-8 col-sm-10">
            <div className="about-desc">
              <h2 className="pb-2">About Us</h2>
              <p>
                Naga Capital Partners Private Limited is a Singapore-based
                multi-family office specialising in providing asset management
                and independent advice to qualified accredited high net worth
                investors and family offices all over the world.
              </p>
              <p>
                Naga Capital was founded in 2012 by Yang Yeo, who is an alumni
                of Goldman Sachs and Citigroup. We aim to assist family offices
                in protecting their wealth and achieve their financial
                objectives.
              </p>
              <p>
                Naga Capital Partners is regulated by the Monetary Authority of
                Singapore.
              </p>
            </div>
          </div>
          <div className="col-md-2 col-sm-1" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
