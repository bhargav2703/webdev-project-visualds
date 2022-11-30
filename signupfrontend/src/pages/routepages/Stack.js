import React, { useState } from 'react';
// import './App.css';
import Print_stack from './box_print_stack';
import {useRef} from 'react';
import './content.css'

const nums = [];
function isNumber(str) {
    if (str.trim() === '') {
      return false;
    }
  
    return !isNaN(str);
  }
  

function Stack(){
    // const [flex,removeflex] = useState(['flex']);
    // const [noflex,flexx] = useState(['none']);
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const [print,newprint] = useState(<Print_stack nums={nums}/>)
    var handleClick1 = () => {
        var r = (inputRef.current.value);
        if(!isNumber(r)){
            alert('invalid type!!!')
            return;
        }
        nums.push(r);
        newprint(<Print_stack nums={nums}/>);
        console.log(nums);
    }
    function handleClick2(){
        nums.pop();
        newprint(<Print_stack nums={nums}/>);
        // return(
        //     <Print nums={nums}/>
        // )
        console.log(nums);
    }
    console.log(nums);
    // nums.map((i) => {
    //     <Box value={i}/>
    // })

    return(
        <div className="big11">
          <span>
          <center>
          <div className="buttons11">
                <input type="text" ref={inputRef}/>
                <button onClick={handleClick1}>PUSH</button>
                <button onClick={handleClick2}>POP</button>
           </div>
           
          </center>
          </span>
          <span>
          <center>
          <Print_stack nums={nums}/>
          </center>
          </span>
        </div>
    );
}


export default Stack;