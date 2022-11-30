import React, { useState } from 'react';
import './navbar.css';
import Print from './box_print';
import {useRef} from 'react';
import './content.css'
import { Alert } from 'bootstrap';

const nums = [];
function isNumber(str) {
    if (str.trim() === '') {
      return false;
    }
  
    return !isNaN(str);
  }
  
var check=0;
function Sll(){
    // const [flex,removeflex] = useState(['flex']);
    // const [noflex,flexx] = useState(['none']);
    const inputRef = useRef('Si');
    const inputRef1 = useRef(null);
    const [print,newprint] = useState(<Print nums={nums}/>)
    var handleClick1 = () => {
        var r = (inputRef.current.value);
        if(!isNumber(r)){
            alert('invalid type!!!')
            return;
        }
        nums.push(r);
        newprint(<Print nums={nums}/>);
        console.log(nums);
    }
    function handleClick2(){
        if(!isNumber(inputRef1.current.value)){
            alert('invalid type !!!');
            return;
        }
        for(var i in nums){
            if(nums[i] == inputRef1.current.value){
                check = 1;
            }
        }
        if(check == 0){
            alert('element doesnt exist!!!');
            check = 0;
            return;
        }
        if(check == 1){
            var t = (inputRef1.current.value);
            const index = nums.indexOf(t);
            const x = nums.splice(index,1);
            newprint(<Print nums={nums}/>);
            // return(
            //     <Print nums={nums}/>
            // )
        }
        console.log(nums);
        check = 0;
    }
    console.log(nums);
    // nums.map((i) => {
    //     <Box value={i}/>
    // })

    return(
        <div className="big">
          <center>
          <div className="buttons">
                <input type="text" ref={inputRef}/>
                <button onClick={handleClick1}>Insert</button>
                <button onClick={handleClick2}>Delete</button>
                <input type="text" ref={inputRef1}/>
           </div>
          </center>
          <center>
          <Print nums={nums}/>
          </center>
        </div>
    );
}


export default Sll;