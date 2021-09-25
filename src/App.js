import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import PhotoGallery from "./components/pages/PhotoGallery/PhotoGallery";
import VideoGallery from "./components/pages/VideoGallery/VideoGallery";
import StudentLogIn from "./components/pages/Login/StudentLogIn";
import GuarfdianLogIn from "./components/pages/Login/GuarfdianLogIn";
import TeacherLogIn from "./components/pages/Login/TeacherLogIn";
import Notice from "./components/pages/Notice/Notice";
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
        <Route path="/notice">
          <Notice />
        </Route>
        <Route path="/student-login">
          <StudentLogIn/>
        </Route>
        <Route path="/guardians-login">
          <GuarfdianLogIn/>
        </Route>
        <Route path="/teachers-login">
          <TeacherLogIn/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
