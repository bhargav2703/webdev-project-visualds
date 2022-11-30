import React from 'react';
import './App.css';
// import {Link} from 'react-router-dom'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './navbar';
import AboutUs from './nav-pages/aboutus';
import Home from './home';
import DataStruct from './nav-pages/dsa';
import Queue from './Queue';
import Stack from './Stack';
import Sll from './Sll';
function App() {
  return (
    <>
      <Router>
        <NavBar/>
        {/* <Home/> */}
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path = '/about us' element = {<AboutUs/>}/>
          {/* <Route path = '/data structures' element = {<DataStruct/>}/>
          <Route path='/sll' element={<DataStruct/>}></Route> */}
          <Route path='/sll' element = {<Sll/>}/>
          <Route path='/queue' element = {<Queue/>}/>
          <Route path='/stack' element = {<Stack/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
