import { useState } from 'react'
import '../App.css'
import '../styling/BotPageDesign.css'
import AiOrb from "../assets/AiOrb";
import Lottie from "lottie-react";
import bgAnima from "../assets/bgAnima.json"
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import Background from "./backImg.jpg"

const API_KEY = "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";
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system", "content":"first greet the user with their name then ask them whats up. After they respond, Console the user using affirmations"
}
export default function Bot() {
    const [messages, setMessages] = useState([
        {
          message: "Hello, I'm AffirmationsBot! May I know your name?",
          sentTime: "just now",
          sender: "ChatGPT"
        }
      ]);
      const [isTyping, setIsTyping] = useState(false);
    
      const handleSend = async (message) => {
        const newMessage = {
          message,
          direction: 'outgoing',
          sender: "user"
        };
    
        const newMessages = [...messages, newMessage];
        
        setMessages(newMessages);
    
        // Initial system message to determine ChatGPT functionality
        // How it responds, how it talks, etc.
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
      };
    
      async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
        // Format messages for chatGPT API
        // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
        // So we need to reformat
    
        let apiMessages = chatMessages.map((messageObject) => {
          let role = "";
          if (messageObject.sender === "ChatGPT") {
            role = "assistant";
          } else {
            role = "user";
          }
          return { role: role, content: messageObject.message}
        });
    
    
        // Get the request body set up with the model we plan to use
        // and the messages which we formatted above. We add a system message in the front to'
        // determine how we want chatGPT to act. 
        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [
            systemMessage,  // The system message DEFINES the logic of our chatGPT
            ...apiMessages // The messages from our chat with ChatGPT
          ]
        }
    
        await fetch("https://api.openai.com/v1/chat/completions", 
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(apiRequestBody)
        }).then((data) => {
          return data.json();
        }).then((data) => {
          console.log(data);
          setMessages([...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }]);
          setIsTyping(false);
        });
      }
    
      return (
        <section style={{
          background:"red"
        }}>

        <div>
        <div>  
        
      <div className="boxNew">
      
      <div className="sqr" style={{'--i': 0}}></div>
      <div className="sqr" style={{'--i': 1}}></div>
      <div className="sqr" style={{'--i': 2}}></div>
      <div className="sqr" style={{'--i': 3}}></div>
      <div className="sqr" style={{'--i': 4}}></div>
          
           <Lottie loop={true} animationData={AiOrb} 
              style={{
                      top: "20%",
                      right: "70%",
                      overflow: "hidden",
                      position: "fixed",
                      }}/>
          <div >
            <div style={{  height: "650px", width: "600px"  }}>
              

                <MainContainer>   
                    <ChatContainer>  
                        <MessageList
                            style={{  
                              background: "linear-gradient(to bottom, #000104, #002513)"
                             }}
                        scrollBehavior="smooth" 
                        typingIndicator={isTyping ? <TypingIndicator content="AffirmationsBot is typing" /> : null}>
                        <br/>
                        {messages.map((message, i) => {
                            console.log(message)
                            return <Message key={i} model={message} />
                        })}
                        
                        <Lottie loop={true} animationData={bgAnima} />
                        </MessageList>
                        <MessageInput placeholder="Type message here" onSend={handleSend} />        
                    </ChatContainer>
                </MainContainer>
                </div>
            </div>
        </div>
        </div>


        </div>


</section>
      )
}
