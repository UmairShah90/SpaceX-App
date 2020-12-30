import { CircularProgress } from '@material-ui/core';
import React from 'react';
import {useLaunchesQuery} from "../../generated/graphql";
import Launch from "./Launch"
 
const LaunchContainer = () => {

    const { loading, error, data } = useLaunchesQuery();

   if(loading) {
       return <CircularProgress color="primary" />
   }
   if(error || !data) {
       return <h1>Error</h1>
   }
   if(data) {
       return <Launch data={data}/>
   }

}

export default LaunchContainer;
 