
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [message, setMessage]=useState('');

  const handleChange = event => {
        setMessage(event.target.value);
    
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
        
              <h2>{message}</h2>
            </div>
          );

};

export default App


