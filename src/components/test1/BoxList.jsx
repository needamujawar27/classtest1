import React,{useState} from "react";
import { CardContent, Grid,Card } from "@mui/material";
import { Xs } from "./data";


export const BoxList=()=>{
  const [data,setData]=useState(Xs)
    return(
        <Grid container spacing={2}>
          {
            data.map((item)=>
            <Grid item xs={item.xs}>
                <Card sx={{bgcolor:(item.clr),height:"60px"}}>
                    <CardContent>
                      
                    </CardContent>
                </Card>
            </Grid>
            )
          }
        </Grid>
    )
}