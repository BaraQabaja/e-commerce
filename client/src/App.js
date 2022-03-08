

import {Error,Login}from'./Pages';
import {useState} from 'react'
function App() {
  const [color,setColor]=useState(true)
console.log("hi")
 
const toggleColor=()=>{
  return setColor(!color);
}

  return (
    <div class={color?"white":"black"}>
     <Error/>
     <Login/>
     <button onClick={toggleColor} >mybutton</button>
    </div>
  );
}

export default App;
