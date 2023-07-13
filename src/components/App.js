
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [message, setMessage]=useState('');

  const handleChange = event => {
    if(event.target.value.length!=0){
     
      setMessage(event.target.value);
      
    }else{
      setMessage('Hello '+event.target.value+'!');}
    
        // console.log('value is:', event.target.value);
      };
      return (
            <div>
              <label for="message">Enter your name:</label> 
              <br/>
              <br/>
              <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={message}
              />
        
              <p>{message}</p>
            </div>
          );

};

export default App


