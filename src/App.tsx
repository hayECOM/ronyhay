import { Fragment } from 'react/jsx-runtime'
import './App.css'
import About from './components/sections/About'
import ByTheNumber from './components/sections/ByTheNumber'
import GetInTouch from './components/sections/GetInTouch'
import Ventures from './components/sections/Ventures'

function App() {
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   const url = "" // url of google script for saving data into google sheet
    
  //   await fetch(url, {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: JSON.stringify({ Name: e.target.name.value, Email: e.target.email.value })
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(console.error)
  // }

  return (
    <Fragment>
      <ByTheNumber />
      <About />
      <Ventures />
      <GetInTouch />
    </Fragment>
  )
}

export default App
