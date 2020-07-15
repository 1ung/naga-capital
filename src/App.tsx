import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact={true} path="/" render={() => <Home />} />
          <Route exact={true} path="/about" render={() => <About />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
