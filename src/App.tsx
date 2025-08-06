import { Fragment } from 'react/jsx-runtime'
import './App.css'
import ByTheNumber from './components/sections/ByTheNumber'
import About from './components/sections/About'
import Ventures from './components/sections/Ventures'
import Footer from './components/sections/Footer'

function App() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = "https://script.google.com/macros/s/AKfycbzy44HJiPPz8SzpN2dvi4E3ZYDNIOPFqhrT1XND22oTM60I-drpMAVyxoBiExZoGx5d/exec"
    
    await fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ Name: e.target.name.value, Email: e.target.email.value })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(console.error)
  }

  return (
    <Fragment>
      <ByTheNumber />
      <About />
      <Ventures />
      <Footer />

      <div>
        <h1 className='text-white'>Test submition</h1>
        <form onSubmit={handleSubmit}>
          <input name="name" type='text' placeholder='name' />
          <input name="email" type='email' placeholder='email' />
          <button className='text-white' type='submit'>Add</button>
        </form>
      </div>
    </Fragment>
  )
}

export default App
