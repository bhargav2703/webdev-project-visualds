import React, { useState } from 'react';
// import './App.css';
import Box_stack from './Box_stack';


function Print_stack(props){
    return(
        <div className="container3">
        {
        props.nums.map((i) => {
        return(
            <Box_stack value={i}/>
                );
            })
        }
        </div> 
    )
}

export default Print_stack;