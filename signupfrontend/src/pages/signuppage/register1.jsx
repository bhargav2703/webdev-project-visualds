import { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'
import axios from "axios"
import './register1.css'

const Signin = () =>{

  const[data,setData] = useState({
    fullName:"",
    username:"",
    email:"",
    password:""
  })
  const [error,setError] = useState("")
  const navigate = useNavigate();


  const handleChange = ({currentTarget:input}) => {
    setData({...data,[input.name]:input.value})

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
      try {
        const url = "http://localhost:4000/api/users"
        const {data:res} = await axios.post(url,data);
        navigate("/login")
        console.log(res.message)
      } catch (error) {
        if(error.response && error.response.status >= 400 && error.response.status <= 500){
            setError(error.response.data.message)
        }
        
      }
  } 
  return (
    <div className='main'>
    <div className='box1'>
        <div className='inner-box'>
            <div className='forms-wrap'>
            <form className='sign-in-form' onSubmit={handleSubmit}>
                <div className='logo'>
                <h3></h3>
                </div>
                <div className='heading'>
                    <h2>
                    Please Create An Account

                    </h2>
                    <h6>Not Registered Yet?</h6>
                    <a href='#' className='toggle'>Sign Up</a>
                </div>
                <div className="actual-form">

                <div className="input-wrap">
            <input className='input-field'
            onChange={handleChange}
            name = 'fullName'
            placeholder = 'fullName'
            value = {data.fullName} />
      
            </div>

            <div className="input-wrap">
            <input className='input-field'
            onChange={handleChange}
            name = 'username'
            type='text'
            placeholder = 'username'
            value = {data.username} />
             
            </div>

                    
            <div className="input-wrap">
            <input className='input-field'
            onChange={handleChange}
            name = 'email'
            placeholder = 'email'
            type="email"
            value = {data.email} />
            
            </div>

            <div className="input-wrap">
              <input
                type={"password"}
                placeholder = 'password'
                name = 'password'
                className={"input-field"}
                onChange = {handleChange}
                value = {data.password}
                required
              />
             
            </div>
            {error && <div className='error_msg' > {error}</div>}

            <button type="submit" value="Sign In" 

            className="sign-btn"> Sign Up</button >

            <p className="text">
              Forgotten your password or you login datails?
              <a href="#">Get help</a> signing in
            </p>
          </div>
          <div>
            
          </div>
          

          
          
          
        </form>
       


        

            </div>


            <div className='carousel'>
                <div className={'inner-carousel'}>
                    <h1 className='company-title'>DATA STRUCTURES</h1>
                    <p className='company-details'>
                    A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data. There are different basic and advanced types of data structures that are used in almost every program or software system that has been developed. So we must have good knowledge about data structures. 
                    Linear data structure: Data structure in which data elements are arranged sequentially or linearly, where each element is attached to its previous and next adjacent elements, is called a linear data structure. 
<p>Examples of linear data structures are array, stack, queue, linked list, etc.
Static data structure: Static data structure has a fixed memory size. It is easier to access the elements in a static data structure. 
An example of this data structure is an array.
Dynamic data structure: In dynamic data structure, the size is not fixed. It can be randomly updated during the runtime which may be considered efficient concerning the memory (space) complexity of the code. 
Examples of this data structure are queue, stack, etc.
Non-linear data structure: Data structures where data elements are not placed sequentially or linearly are called non-linear data structures. In a non-linear data structure, we can’t traverse all the elements in a single run only. 
Examples of non-linear data structures are trees and graphs.
</p>
                    </p>
    <h1 className='acc-title'>Already Have An Account</h1>
                    <Link to = '/login'>
                    <button type="submit" value="Sign In"
                     

className="signup-btn"> Sign In</button >
                  </Link>

                 
                </div>



            </div>


        </div>

    </div>
</div>



  )
}

export default Signin;