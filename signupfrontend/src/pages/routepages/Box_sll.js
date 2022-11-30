import React from 'react';
// import './App.css';
import {motion} from 'framer-motion';


function Box(props){
    return(
        <motion.div
        whileHover={{
        scale: 1.2,
        transition: { delay:2, duration: 1 },
        }}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        className="box">
            <h1>{props.value}</h1>
        </motion.div>
    );
}

export default Box;