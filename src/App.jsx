import { useState } from 'react'
import Card from './components/Card/Card'
import Header from '../src/components/header/index'

function App() {
  const [login, setLogin] = useState(false)
  const [toRegister, setToRegister] = useState(false)


  const toggleLogin = ()=>{
    setLogin(!login)
    console.log(login);
  }
  const toggleRegister = ()=>{
    setToRegister(!toRegister)
  }

  return (
    <div className='cards-flex'>
      <Header toggleLogin={toggleLogin} toggleRegister={toggleRegister}/>
      <Card/>
    </div>
  )
}

export default App
