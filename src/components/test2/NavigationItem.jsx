import React from "react";
import {Grid,Button} from "@mui/material"
import {Link} from "react-router-dom";

export const NavigationItem=({item})=>{
    return(
        <Grid item xs={2}>
            <Link to={item.path}>
            <Button variant="contained" color="warning" fullWidth>{item.label}</Button>
            </Link>
        </Grid>
    )
}