import React, { useState } from "react";
import {Grid,Card,CardContent} from "@mui/material"
import { Route } from "./data/route";
import {NavigationItem} from "./NavigationItem"

export const Navigation=()=>{
   const[data,SetData]=useState(Route);
    return(
      <Card>
        <CardContent>
       
      <Grid container spacing={2}>
        {
          data.map((item)=>
          <NavigationItem item={item}/>
          )
        }
      </Grid>         
      </CardContent>
      </Card>
    )
}