import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />'
          <Route path="/contact" exact component={Contact} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/About" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
