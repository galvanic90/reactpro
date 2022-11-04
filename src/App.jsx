import Button from './components/Button'
import Contador from './components/Contador'
import './App.css'
import {useState, useEffect} from "react"

function App() {
  const [count, setCount] = useState(2)
  const [quote, setQuote] = useState()


  const handleIncrease = () => {
    setCount(count => count+1)
  }

  const handleDecrease = () => {
    setCount(count => count-1)
  }

  useEffect(()=>{
    fetch(`https://breakingbadapi.com/api/quotes/${count}`).then(
      res=> res.json()
    ).then(data => setQuote(data[0]))
    console.log(quote)
  }, [count])
  return (
    <>
      <Contador text={count}></Contador>
      <Button action={handleIncrease} text="Aumentar" color="green"></Button>
      <Button action={handleDecrease} text="Disminuir" color="red"></Button>
      <div>
        {count >= 2 ? <p> {quote.quote_id} your quote id is greater or equal than 2</p> : <p>{quote.quote_id} your quote id is less than 2</p>}
        <p>Quote Id: {quote.quote_id}</p>
        <p>Quote Author: {quote.author}</p>
        <p>Your breacking bad quote is: {quote.quote}</p>
      </div>
      
    </>  
  )
}

export default App
