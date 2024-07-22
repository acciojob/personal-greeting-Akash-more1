
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [greet, setGreet]=useState("");

  const greeting= (e) =>{
    setGreet("Hello "+e.target.value+"!");
  }
  return (
    <div>
      <input type="text" onChange={greeting}></input>
      <h1> {greet}</h1>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
