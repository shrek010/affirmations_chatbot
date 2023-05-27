import React from 'react'
import '../styling/LogIn.css'
import { Button } from '@chatscope/chat-ui-kit-react'
import { AwesomeButton } from 'react-awesome-button';
import { useNavigate } from 'react-router-dom' 

function LangOpt() {
    const navigate = useNavigate();

    function onEnglish(){
        navigate("/bot")
    }
    function onHindi(){
        navigate("/bothindi")
    }

  return (
    <section>
        <h1 className="h2type">Choose a Language</h1>
    <div className="color"></div>
     <div className="color"></div>
     <div className="color"></div>

     <AwesomeButton type="secondary" style={{  
                              background: "linear-gradient(to bottom,#a7c0e8, #052943)",
                              width: "900px"
                             }} onPress={onEnglish}>English</AwesomeButton>
     <br/>
     <br/>
     <AwesomeButton type="primary"style={{  
                              background: "linear-gradient(to bottom,  #a7c0e8, #052943)",
                              width: "900px"}}
                              onPress={onHindi}>
                                हिंदी</AwesomeButton>

   
    
     
</section>
     
        )
}

export default LangOpt