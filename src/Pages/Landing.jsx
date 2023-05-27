import React from 'react'
import "../styling/LogIn.css"
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom' 




function Landing() {
    const navigate = useNavigate();


    function onClickButt(){
        navigate("/realsignup")
    }

  return (
    <section>
     <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>

      <h1 className="h2type">
          <Typewriter
            options={{
              autoStart:true,
              loop:true,
              delay:100,
              strings:["Affirmations bot"]
            }}
          />
        </h1>
            <button onClick={onClickButt}>
                Continue
            </button>
        

  </section>
  
  )
}

export default Landing