import React from 'react';
// import './App.css';
import {motion} from 'framer-motion';


function Box_stack(props){
    return(
        <motion.div
        whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
        }}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        className="box_stack">
            <h3>{props.value}</h3>
        </motion.div>
    );
}

export default Box_stack;