import { useState,useRef,useEffect } from "react";

function App() {

  const [count,setCount] = useState(0);
  const h1 = useRef();

  useEffect(()=>{
    h1.current.textContent="Texto alterado";
  },[])

  return (
   <>
      <p>{count}</p>
      <button onClick={()=> setCount(count+1)}>Aumentar</button>
      <h1 ref={h1}>Texto original</h1>
   </>
  )
}

export default App
