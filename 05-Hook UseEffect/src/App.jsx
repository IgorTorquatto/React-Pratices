import { useState,useEffect } from "react";

function App() {

  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log('olá mundo');
  },[count]);

  return (
   <>
      <p>{count}</p>
      <button onClick={()=> setCount(count+1)}>Aumentar</button>
   </>
  )
}

export default App
