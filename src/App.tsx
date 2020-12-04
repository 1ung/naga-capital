import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TermsAndConditionsModal from "./components/TermsAndConditionsModal/TermsAndConditionsModal";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import DayBackground from "./assets/images/day-bg.jpg";
import NightBackground from "./assets/images/night-bg.jpg";
import { Helmet } from "react-helmet";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [currentBackground, setCurrentBackground] = useState(DayBackground);

  useEffect(() => {
    const format = "hh:mm";
    const currentTime = moment(new Date(), format);
    const daySeven = moment("07:00:00", format);
    const nightSeven = moment("19:00:00", format);

    if (currentTime.isBetween(daySeven, nightSeven)) {
      setCurrentBackground(DayBackground);
    } else {
      setCurrentBackground(NightBackground);
    }
  }, []);

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      <Helmet>
        <title>Naga Capital Partners</title>
        <meta
          name="description"
          content="Naga Capital Partners Private Limited is a Singapore-based
                multi-family office specialising in providing asset management
                and independent advice to qualified accredited high net worth
                investors and family offices all over the world."
        />
        <link rel="canonical" href="http://www.naga-capital.sg/" />
      </Helmet>
      <Navbar />
      <Router>
        <Switch>
          <Route exact={true} path="/" render={() => <Home />} />
          <Route exact={true} path="/about" render={() => <About />} />
          <Route exact={true} path="/contact-us" render={() => <ContactUs />} />
        </Switch>
      </Router>
      <TermsAndConditionsModal />
    </div>
  );
}

export default App;
