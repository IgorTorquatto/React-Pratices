import { useState } from "react";
import { Input } from "./components/Input";

function App() {
  const [ name, setName ] = useState('');
  const [ email,setEmail ] = useState('');

  return (
   <>
      <Input inputType={'text'} inputValue={name} setInputValue={setName}/>
      <Input inputType={'email'} inputValue={email} setInputValue={setEmail}/>
      {name}
   </>
  )
}

export default App
