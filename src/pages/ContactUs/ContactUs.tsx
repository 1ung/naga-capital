import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Footer from "../../components/Footer/Footer";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

function ContactUs(props: any) {
  return (
    <>
      <div className="container ContactUs">
        <div className="pt-5 pb-3 row contact-row">
          <div className="col-md-7">
            <div className="contact-desc">
              <h2 className="pb-2 company-name">
                Naga Capital Partners Private Limited
              </h2>
              <p className="contact-address">
                82 Telok Ayer Street, Far East Square, #02-04 Singapore 048467
              </p>
              <div>
                <p className="contact-details">
                  <span className="pr-2">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-envelope-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                      />
                    </svg>
                  </span>
                  <span>Cynthia.Lim@naga-capital.com</span>
                </p>
                <p className="contact-details">
                  <span className="pr-2">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-telephone-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                      />
                    </svg>
                  </span>
                  <span>+65 6900 8388</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="map-div">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDKPyXSOPbvaOhrjwXdBdTRwyvruW9qeoA",
                  language: "en",
                }}
                defaultCenter={{ lat: 1.282642, lng: 103.848686 }}
                defaultZoom={15}
              >
                <AnyReactComponent
                  lat={1.282642}
                  lng={103.848686}
                  text={
                    <svg
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      className="bi bi-geo-alt"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                    </svg>
                  }
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
