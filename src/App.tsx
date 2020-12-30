import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Header";
import LaunchPage from "./components/Launch/LaunchPage";
import RocketPage from "./components/Rocket/RocketPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/launches" component={LaunchPage} />
          <Route path="/rockets" component={RocketPage}/>
            
          
        </Switch>
      </Router>
    </div>
  );
};

export default App;
