
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [message, setMessage]=useState();

  const handleChange = event => {
    let ct=0;
    if(ct==0){
      let k="Hello "+event.target.value+"!"
     setMessage(k)
    }else if(event.value.length==0){
      setMessage("")
    }
    else {
      setMessage(event.target.value)
    }
    
        // console.log('value is:', event.target.value);
      };
      return (
            <div>
              <p>Enter your name:</p>
              
           
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


