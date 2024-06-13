import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([]);
  useEffect(()=>{
    axios.get("/api/jokes")
    .then((res)=>{
      setJokes(res.data);
    })
    .catch((err)=>{
      console.log(err); 
    })
  })

  return (
    <>
      <h1>Hi there. We are creating Frontend</h1>
      <p>JOKES : {jokes.length} </p>

      {
        jokes.map((joke,index) =>(
          <div key = {joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      }
    
    </>
  )
}

export default App
