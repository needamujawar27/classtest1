    import React from "react";
    import {BrowserRouter,Routes,Route} from "react-router-dom"
    import { Home } from "./Home";
    import { Counter } from "./Counter"; 
    import { ProductList } from "./ProductList";
    import { Services } from "./Services";
    import { Contact } from "./Contact";
    import { Navigation } from "./Navigation";

    export const Landing=()=>{
        return(
        <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/count" element={<Counter/>}/> 
            <Route path="/prod" element={<ProductList/>}/>
            <Route path="/serv"  element={<Services/>}/>
            <Route  path="/con" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        )
    }