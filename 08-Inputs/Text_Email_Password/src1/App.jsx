import { useState } from "react";

function App() {
  const [ name, setName ] = useState('');

  return (
   <>
      <input type="text" value={ name } onChange={(event)=> setName(event.target.value)}></input>
      <div>
        {name}
      </div>
   </>
  )
}

export default App
