import { User } from './components/User.jsx';
import UserContext from './context/UserContext.js';

function App() {

  return (
   <>
      <UserContext.Provider value={ {nome: 'Igor'}}>
          <User/>
      </UserContext.Provider>
   </>
  )
}

export default App
