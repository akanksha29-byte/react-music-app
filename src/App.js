import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getItems } from "./actions/actions";
import { useDispatch } from "react-redux";
import MusicPage from "./components/MusicPage/MusicPage";
import Favorites from "./components/Favorites/Favorites";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <div className="d-flex justify-content-center align-items-center main_container">
        <Switch>
          <Route component={MusicPage} path="/music" />
          <Route component={HeroSection} path="/" exact />
          <Route component={Favorites} path="/favorites" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
