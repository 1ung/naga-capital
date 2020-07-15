import React, { useState, useEffect } from "react";

function About(props: any) {
  return (
    <div className="container About">
      <div className="row pt-5">
        <div className="col-md-2 col-sm-1" />
        <div className="col-md-8 col-sm-10">
          <div className="about-desc">
            <h2 className="pb-2">Our Mission</h2>
            <p>
              At Naga Capital, our mission is simple: the creation of a
              worldwide network of wealth management entities harmonized in the
              pursuit of long-term capital appreciation for their clients.
            </p>
            <p>
              In a world where the ultra-high net worth market segment continues
              to expand (at a compounded rate of 7% per annum) and where global
              banking institutions have increasingly diminished the scope of
              their personalized services, UCAP Asset Management aspires to
              provide the most comprehensive coverage of any private wealth
              institution in the world.
            </p>
            <p>
              Pursuant to this goal, the Group operates according to an
              innovative, open-architecture model: each constituent wealth
              management office functions as an independent firm. On behalf
              their clients, these offices serve both as local service providers
              and as points of access to UCAP Asset Management’s universe of
              partner institutions, with whom the Group contracts as a single
              entity.
            </p>
            <p>
              Such a structure guarantees our clients access to institutional
              pricing power while preserving the regulatory sovereignty and
              bespoke approach for which they turned to private wealth
              management in the first place.
            </p>
          </div>
        </div>
        <div className="col-md-2 col-sm-1" />
      </div>
    </div>
  );
}

export default About;
