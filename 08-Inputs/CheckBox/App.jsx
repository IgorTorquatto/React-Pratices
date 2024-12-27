import { useState } from "react";

function App() {
  const [ termos,setTermos ] = useState(false);

  function handleChange({target}){
    setTermos(target.value)
  }
  return (
   <>
    <label>
      <input
      type="checkbox"
      value="Termos"
      checked={termos}
      onChange={handleChange}
      />
      Aceitar termos de privacidade
    </label>
    {
      termos && <p>Termos aceitos</p>
    }
   </>
  )
}

export default App
