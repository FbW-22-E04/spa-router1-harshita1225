import React, { Component } from "react";
import Header from "./components/Header";
import Me from "./views/Me";
import Hobbies from "./views/Hobbies";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main">
            <Routes>
              <Route exact path="/" element={<Me />} />
              <Route exact path="/me" element={<Me />} />
              <Route exact path="/hobbies" element={<Hobbies />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
