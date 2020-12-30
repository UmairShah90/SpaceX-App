import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import Failure from "../Utils/Failure/Failure";
import Success from "../Utils/Success/Success";
import Upcoming from "../Utils/UpComing/Upcoming";
import { Link } from "react-router-dom"
import "./Launch.css";

interface Props {
  data: LaunchesQuery;
}

const Launch: React.FC<Props> = ({ data }) => {
  return (
    <div className="launches">
      <div className="launches-container">
        <h1 className="spacex-heading">SpaceX Launches</h1>
        <p className="spacex-para">
          See the launches that describe SpaceX's journey to the great beyond
        </p>
      </div>

      <div className="launch-deck">
        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                <div className="launch-card">
                 
                  <h2 className="launch-name">{launch.mission_name}</h2>
                  <p className="launch-year">{launch.launch_year}</p>
                  <p className="launch-success">
                    {launch.launch_success ? (
                      <Success />
                    ) : launch.launch_success === false ? (
                      <Failure />
                    ) : (
                      <Upcoming />
                    )}
                  </p>
                  <Link to={`/launches/${launch.flight_number}`} ><button className="viewmore-btn" >View More</button></Link>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default Launch;
