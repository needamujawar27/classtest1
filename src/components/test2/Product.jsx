import React from "react";
import {Grid,Card,CardContent,Rating,Button} from "@mui/material"

export const Product=({item})=>{
    return(
        <Grid item xs={3}>
            <Card>
                <CardContent>
                    <img height={200} width={200} src={item.image} alt="" />
                    <h6>{item.title.slice(0,30)}</h6>
                    <h4>${item.price}  <del>${item.price}</del></h4>
                    
                    <Rating value={item.rating.rate}/> ({item.rating.count})
                    <p>{item.description.slice(0,50)}</p>
                    <Button variant="contained"fullWidth>ADD TO CART</Button>
                    <br />
                    <br />
                    <Button variant="contained" color="warning" fullWidth>BUY</Button>

                </CardContent>
            </Card>
        </Grid>
    )
}