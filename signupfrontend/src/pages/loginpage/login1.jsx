import { useState } from 'react'
import {Link } from 'react-router-dom'
import axios from "axios"
import './login1.css'


const Login = () =>{
  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit1 = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};


 
  return (
    <div className='main'>
    <div className='box1'>
        <div className='inner-box'>
            <div className='forms-wrap'>
            <form className='sign-in-form' onSubmit={handleSubmit1}>
                <div className='logo'>
                
                </div>
                <div className='heading'>
                    <h2>
                       Please Log In to Your Account

                    </h2>
                    <h6>Not Registered Yet?</h6>
                    <a href='#' className='toggle'>Sign Up</a>
                </div>
                <div className="actual-form">
            <div className="input-wrap">
            <input className='input-field'
            type='email'
            onChange={handleChange}
            placeholder = 'email'
            name = 'email'
            value = {data.email}
            required />
              
            </div>

            <div className="input-wrap">
              <input
                type='password'
                name = 'password'
                placeholder = 'password'
                className= "input-field"
                onChange = {handleChange}
                value = {data.password}
                required
              />
            
            </div>

            {error && <div className="error_msg1" >{error}</div>}

            <button type="submit" value="Sign In" 

            className="sign-btn"> Sign In</button >

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
                    <p>Trie is an efficient data structure for searching words in dictionaries, search complexity with Trie is linear in terms of word (or key) length to be searched. If we store keys in a binary search tree, a well-balanced BST will need time proportional to M * log N, where M is the maximum string length and N is the number of keys in the tree. Using trie, we can search the key in O(M) time. So it is much faster than BST. Hashing also provides word search in O(n) time on average. But the advantages of Trie are there are no collisions (like hashing) so the worst-case time complexity is O(n). Also, the most important thing is Prefix Search. With Trie, we can find all words beginning with a prefix (This is not possible with Hashing). The only problem with Tries is they require a lot of extra space. Tries are also known as radix trees or prefix trees.</p>
                    <p>The most common use of Tries is to implement dictionaries due to prefix search capability. Tries are also well suited for implementing approximate matching algorithms, including those used in spell checking. It is also used for searching Contact from Mobile Contact list OR Phone Directory.</p>
                    </p>
                    <h1 className='acc-title'>Dont Have An Account ??</h1>
                    <Link to = '/signup'>
                    <button type="submit" value="Sign In" 

className="signup-btn"> Sign Up</button >
                  </Link>
                    
                </div>


            </div>


        </div>

    </div>
</div>



  )
}

export default Login;