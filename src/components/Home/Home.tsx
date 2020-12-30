import React from "react";
import spaceImg from "./../../Images/space.jpg";
import { Button } from "@material-ui/core";
import {Link} from "react-router-dom";
import "./Home.css";
import Footer from "../Footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <img src={spaceImg} className="spacex-img" alt="" />

      <div id="home-content" className="content">
        <h1>
          Welcome To SpaceX World
          <span role="img" aria-label="Hand waving" className="wave">
            🚀
          </span>
        </h1>
        <p>
          SpaceX designs, manufactures and launches advanced rockets and
          spacecraft. The company was founded in 2002 to revolutionize space
          technology, with the ultimate goal of enabling people to live on other
          planets.
        </p>
      </div>

      <div className="card-deck">
        <div className="card">
          <img
            src="https://cnet1.cbsistatic.com/img/2ZjmzrycBZQD9Dpnt_EnfQ7TTro=/940x0/2020/05/31/5112f3db-5af6-431c-bc0d-a8108ccad2ee/spacex-falcon-9-launch.jpg"
            className="card-img"
            alt="card-img"
          />
          <div className="card-detail">
            <h1 className="card-heading">Launches</h1>
            <p className="card-para">See all of SpaceX's launches into space</p>
            <Button variant="contained" className="link-btn">
              <Link to={`/launches`}>
              View
              </Link>
            </Button>
          </div>
        </div>

        <div className="card">
          <img
            src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/30/1501012342-pmx090117-falconheavy01.jpg?crop=1.00xw:0.492xh;0,0.209xh&resize=480:*"
            className="card-img"
            alt="card-img"
          />
          <div className="card-detail">
            <h1 className="card-heading">Rockets</h1>
            <p className="card-para">View all rockets that SpaceX uses</p>
            <Button variant="contained" className="link-btn">
            <Link to={`/rockets`}>
              View
              </Link>
            </Button>
          </div>
        </div>

        <div className="card">
          <img
            src="https://cdn.vox-cdn.com/thumbor/PCABXCkc8mm7G63iLECRcQBmA-I=/0x0:3840x2560/1200x800/filters:focal(1613x973:2227x1587)/cdn.vox-cdn.com/uploads/chorus_image/image/62194005/GO_SEARCHER_HELO_LANDING_20181018_Helicopter_Landing_Test_2018_10_19_291_9_.0.jpg"
            className="card-img"
            alt="card-img"
          />
          <div className="card-detail">
            <h1 className="card-heading">SpaceX Fleet</h1>
            <p className="card-para">
              View all the boats and vehicles part of SpaceX Offshore Recovery
              System{" "}
            </p>
            <Button variant="contained" className="link-btn">
              View
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
