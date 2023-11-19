import React, { useEffect,useState} from "react";
import {Grid} from "@mui/material"
import { Product } from "./Product";
import axios from "axios"

export const ProductList=()=>{
  const [data,setData]=useState([])
  const getData=async()=>{
    const result=await axios.get("https://fakestoreapi.com/products")
    setData(result.data)
  }
  useEffect(()=>{
    getData();
  },[])
    return(
      <Grid container spacing={2}>
        {
          data.map((item)=>
          <Product item={item}/>
          )
        }

      </Grid>
    )
}