import { useState } from "react";

function App() {
  const [ country,setCountry ] = useState('');

  return (
   <>
     <select value={ country } onChange={(event) => setCountry(event.target.value)} >
        <option value=''> Selecione uma opção</option>
        <option value='Brasil'>Brasil</option>
        <option value='Portugal'>Portugal</option>
        <option value='Moçambique'>Moçambique</option>
     </select>
     {country}
   </>
  )
}

export default App
