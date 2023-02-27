import './App.css'
import MainPage from './pages/Main-Page/MainPage'
import { useState } from 'react'
import Context from './common/context/context'

function App() {
  const [login, setLogin] = useState<boolean>(false)
  return (
    <Context.Provider value={{ login, setLogin }}>
      <div className="App">
        <MainPage />
      </div>
    </Context.Provider>
  )
}

export default App
