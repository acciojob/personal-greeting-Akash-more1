
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [greet, setGreet]=useState("");

  const greeting= (e) =>{
    setGreet("Hello "+e.target.value+"!");
  }
  return (
    <div>
      <h1>Enter your name:</h1>
      <input type="text" onChange={greeting}></input>
      <p>{greet}</p>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
