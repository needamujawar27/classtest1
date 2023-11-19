import React,{useState} from "react";
import {Grid,Card,CardContent,Typography,Button} from "@mui/material"
export const Counter=()=>{
    const [data,setData]=useState(5)
    return(
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={2}>
                        <Button disabled={data===40} onClick={()=>setData(data+5)} variant="contained" fullWidth>INCREMENT</Button>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Typography variant="h1" >COUNT:{data}</Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={2}>
                        <Button disabled={data===5} onClick={()=>setData(data-5)} variant="contained" fullWidth>DECREMENT</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}