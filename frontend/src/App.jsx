import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

/*
axios:-this library is specially designed to make web request
*/

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get(`/api/jokes`).then((response)=>{
      setJokes(response.data)//here we dont need to convert data into json we it is done by axios
    }).catch((error)=>{console.log(error)})
  })

  return (
    <>
      <h1>fullstack basics</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

//NOTES

/* here http://localhost:3000/api/jokes will not always work because it is standard format as well as it handle when service is provided by other hosting services
so to solve this we use /api/jokes and use proxies

proxies*/
