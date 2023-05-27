//REGISTERATION
//THIS IS SIGN UP

import React from 'react'
import { useState } from "react";
import {auth} from "./Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import '../styling/LogIn.css'
import { useNavigate } from 'react-router-dom'
import Typewriter from 'typewriter-effect';



function RealSignup() 
{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();

    const signup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            navigate("/signup");
          })
          .catch((error) => {
            console.log(error);
            alert("wrong credentials")
          });
      };





  return (

    

    <section>
    <div className="wrapper">
        <h2 className="h2type">
          <Typewriter
            options={{
              autoStart:true,
              loop:true,
              delay:110,
              strings:["Affirmations Bot"]
            }}
          />
        </h2>
    <div className="color"></div>
    <div className="color"></div>
    <div className="color"></div>
    <div className="box">
      <div className="square" style={{'--i': 0}}></div>
      <div className="square" style={{'--i': 1}}></div>
      <div className="square" style={{'--i': 2}}></div>
      <div className="square" style={{'--i': 3}}></div>
      <div className="square" style={{'--i': 4}}></div>
      <div className="container">
        <div className="form">
          <h2>Sign up</h2>
          <form onSubmit={signup}>

            <div className='inputBox'>
              <input type='text' placeholder='Name'></input>
            </div>
            <div className="inputBox">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="inputBox">
                <input type="text" placeholder="Mobile Number" maxlength="10" pattern="\d{10}" title="Please enter exactly 10 digits"/>
            </div>
            <div className="inputBox">
                <input type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="inputBox">
                <input type="submit" value="SignUp" />
              </div>
              <p className="forget">Already have an account? <a href="/Signup">Sign up</a></p>
          </form>
        </div>
      </div>
    </div>
    </div>
  </section>




  //   <div>
  //   <form onSubmit={signup}>
  //     <h1>Create Account</h1>
  //     <input
  //       type="email"
  //       placeholder="Enter your email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     ></input>
  //     <input
  //       type="password"
  //       placeholder="Enter your password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //     ></input>
  //     <button type="submit">Sign Up</button>
  //   </form>
  // </div>
    
  )
}

export default RealSignup