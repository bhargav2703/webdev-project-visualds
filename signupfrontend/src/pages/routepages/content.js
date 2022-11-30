import React from 'react';
import './content.css';
import { Link } from 'react-router-dom';
// import img from './images/download.png'
function Content() {
    return (
        <div className='cont' id = 'dsa-cont'>
            {/* <img src="./images/downlodad.png" alt="" /> */}
            <ul className='li-contents'>
                <div>
            <li>
                <div className='items' id = 'sll'>
                    <Link to='/sll'>   
                    <button className='btndsa'>SINGLY LINKED LIST</button>
                    </Link>
                </div>
            </li>
            <li>
                <div className='items' id = 'stack'>
                    <Link to='/stack'>   
                    <span><button className='btndsa'>STACK</button></span>
                    </Link>
                </div>
            </li>
            </div>
            <div>
            <li>
                <div className='items' id = 'queue'>
                    <Link to='/queue'>   
                    <button className='btndsa'>QUEUE</button>
                    </Link>
                </div>
            </li>
            <li>
                <div className='items' id = 'tree'>
                    <Link to='/tree'>   
                    <button className='btndsa'>TREE</button>
                    </Link>
                </div>
            </li>
            </div>
            </ul>
        </div>
    )
}
export default Content