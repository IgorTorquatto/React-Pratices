import { useState } from "react";

function App() {
  const [ texto,setTexto ] = useState('');

  return (
   <>
     <textarea value={texto} onChange={(event)=>setTexto(event.target.value)} rows={5} cols={30}/>
     {texto}
   </>
  )
}

export default App
