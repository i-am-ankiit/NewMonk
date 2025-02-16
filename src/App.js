import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={6}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={6}
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={6}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={6}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={6}
                country="us"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={6}
                country="us"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={6}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                pageSize={6}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
