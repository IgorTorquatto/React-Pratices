import { useState } from "react";
import { Message } from "./components/Message";

function App() {

  const [count,setCount] = useState(0);

  return (
   <>
      <p>{count}</p>
      <button onClick={()=> setCount(count+1)}>Aumentar</button>
      <Message />
   </>
  )
}

export default App
