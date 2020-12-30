import { CircularProgress } from '@material-ui/core';
import React from 'react'
import { useRocketsQuery } from '../../generated/graphql';
import Rocket from './Rocket';



const RocketContainer = () => {
    const {data,error,loading} = useRocketsQuery();

    if(error){
        return <p>There was an error</p>
    }

    if(loading){
        return <CircularProgress />
    }

    if(data){
        return  <Rocket data={data}/> 
    }
}

export default RocketContainer
