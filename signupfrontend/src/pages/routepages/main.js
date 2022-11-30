import React, { useRef } from "react";
import './main.css';
import Content from "./content";
import { Link } from "react-router-dom";
import {Link as MyLink} from "react-scroll";
function MainPage(){
    return(
        <div className="mainPage"> 
            {/* <img src = {require('./images/neural-n-banner_11zon.jpg')}></img> */}
            <h1 className="herosec">                VisualDS will help you visualize data structures so that you wont have to remember anything
            </h1>
            <div id='scrolldown'><MyLink to="dsa-cont" spy={true} smooth={true}><b>scroll down<i class="fa-solid fa-arrow-down"></i></b></MyLink></div>

            {/* <div ref={ServicesRef}/> */}
            
        </div>
        
    )
}
export default MainPage