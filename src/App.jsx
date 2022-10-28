import Button from './components/Button'
import Contador from './components/Contador'
import './App.css'
import {useState} from "react"

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count => count+1)
  }

  const handleDecrease = () => {
    setCount(count => count-1)
  }

  return (
    <>
      <Contador text={count}></Contador>
      <Button action={handleIncrease} text="Aumentar" color="green"></Button>
      <Button action={handleDecrease} text="Disminuir" color="red"></Button>
    </>  
  )
}

export default App
