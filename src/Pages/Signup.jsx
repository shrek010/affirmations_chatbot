//LOGIN PAGE
//SIGN IN

import React from 'react'
import { useState } from "react";
import {auth} from "./Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'     //navigation
import '../styling/LogIn.css'
import Typewriter from 'typewriter-effect'

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            navigate("/langopt")
          })
          .catch((error) => {
            console.log(error);
            alert("wrong credential");
          });
      };




  return (
    <section>
      <div className="wrapper">
      <h2 className="h2type">
          Affirmations bot
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
            <h2>Login Form</h2>
            <form onSubmit={signIn}>
              <div className="inputBox">
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="inputBox">
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <div className="inputBox">
                <input type="submit" value="Login" />
              </div>
          
              <p className="forget">Don't have an account ? <a href="/RealSignup">Sign up</a></p>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );

}









//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const signIn = (e) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//           .then((userCredential) => {
//             console.log(userCredential);

//             navigate("/bot")
          

//           })
//           .catch((error) => {
//             console.log(error);
//             alert("wrong credential");
//           });
//       };

//   return (
//     <div>
//         <form onSubmit={signIn}>
//         <h1>Log In to your Account</h1>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           ></input>

//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         ></input>
//         <button type="submit">Log in</button>
//         </form>
//     </div>
//   )
// }

export default Signup