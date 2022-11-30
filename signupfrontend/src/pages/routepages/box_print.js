import React, { useState } from 'react';
// import './App.css';
import Box from './Box_sll';


function Print(props){
    return(
        <div className="container1">
        {
        props.nums.map((i) => {
        return(
            <Box value={i}/>
                );
            })
        }
        </div> 
    )
}

export default Print;