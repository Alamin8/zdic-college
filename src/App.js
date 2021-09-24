import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import PhotoGallery from "./components/pages/PhotoGallery/PhotoGallery";
import VideoGallery from "./components/pages/VideoGallery/VideoGallery";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/photo-gallery">
          <PhotoGallery />
        </Route>
        <Route path="/video-gallery">
          <VideoGallery />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
