
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [message, setMessage]=useState();

  const handleChange = event => {
    // setMessage(event.target.value);
    
      
      (event.target.value!=0)?
     setMessage("Hello "+event.target.value+"!"):
     setMessage("")
     
    
    
        // console.log('value is:', event.target.value);
      };
      return (
            <div>
              <label>Enter your name:</label>
              
           
              <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                // value={message}
              />
        
              <p>{message}</p>
            </div>
          );

};

export default App


