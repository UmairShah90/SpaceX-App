import React from 'react'
import { RocketsQuery } from '../../generated/graphql'
import { Link } from "react-router-dom";
import "./Rocket.css";
import Footer from '../Footer/Footer';

interface Props {
    data: RocketsQuery
}

const Rocket: React.FC<Props> = ({data}) => {
    return (
        <div className="rockets">
            <h1>Rockets</h1>
            <p>The spectacular marvel of engineering that allow SpaceX to fullfil its vision</p>

            <div className="rocket-card-deck">
            {
                !!data.rockets && data.rockets.map((rocketObj, ind) => (
                <div className="rocket-card" key={ind}>
                    {
                        rocketObj?.flickr_images ? <img className="rocket-img" 
                        src={`${rocketObj.flickr_images[0]}`} alt=""/> : null
                    }
                    <h2 className="rocket-name" >{rocketObj?.rocket_name}</h2>
                    <p className="rocket-status">{rocketObj?.active}</p>
                    <Link to={`/rockets/${rocketObj?.rocket_id}`} ><button className="rocket-viewmore-btn" >View More</button></Link>

                </div>    
                ))
            }

            </div>
            <Footer />
        </div>
    )
}

export default Rocket
