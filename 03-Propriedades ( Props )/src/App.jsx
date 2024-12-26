import { Title } from './components/Title.jsx';
import { Mensagem } from './components/Mensagem.jsx';
function App() {
  return (
   <>
      <Title titulo="Título 1"/>
      <Title titulo="Título 2"/>
      <Title titulo="Título 3"/>
      <Title/>
      <Mensagem msg="Lorem, ipsum dolor."/>
      <Mensagem msg="Lorem ipsum dolor sit."/>
      <Mensagem/>
   </>
  )
}

export default App
