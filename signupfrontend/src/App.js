import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./pages/Main";

import Login from "./pages/loginpage/login1";
import Signin from "./pages/signuppage/register1";
import NavBar from './pages/routepages/navbar';
// import AboutUs from './pages/routepages/nav-pages/aboutus';
import Home from './pages/routepages/home';
// import DataStruct from './nav-pages/dsa';
import Queue from './pages/routepages/Queue'
import Stack from './pages/routepages/Stack';
import Sll from './pages/routepages/Sll';
// import { Router } from "express";


function App(){
	const user = localStorage.getItem("token");

	return (
		<Routes>
			 {user&&<Route path='/' exact element={<><NavBar/><Home /></>} />}
          {/* <Route path = '/about us' exact element = {<AboutUs/>}/> */}
          {/* <Route path = '/data structures' element = {<DataStruct/>}/>
          <Route path='/sll' element={<DataStruct/>}></Route> */}
          {/* <Route path='/sll' exact element = {<></><Sll/>}/> */}
		  <Route path='/sll' exact element = {<><NavBar/><Sll/></>}/>
          <Route path='/queue' exact element = {<><NavBar/><Queue/></>}/>
          <Route path='/stack' exact element = {<><NavBar/><Stack/></>}/>
		  <Route path='/home' exact element = {<><NavBar/><Home/></>}/>
			<Route path="/signup" exact element={<Signin />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>

		
	);
}

export default App;
