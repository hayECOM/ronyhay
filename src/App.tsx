import { Fragment } from 'react/jsx-runtime'
import './App.css'
import About from './components/sections/About'
import ByTheNumber from './components/sections/ByTheNumber'
import GetInTouch from './components/sections/GetInTouch'
import Ventures from './components/sections/Ventures'
import Landing from './components/sections/Landing'
import { useRef } from 'react'

function App() {
  const numberRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const venturesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement | null>,
    offset: number = 0 // height of fixed header
  ) => {
    if (ref.current) {
      const top = ref.current.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToBottom = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
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
      <Landing
        onScrollTo={{
          number: () => scrollToSection(numberRef),
          about: () => scrollToSection(aboutRef),
          ventures: () => scrollToSection(venturesRef),
          contact: () => scrollToBottom(contactRef),
        }}
      />
      <div ref={numberRef}><ByTheNumber /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={venturesRef}><Ventures /></div>
      <div ref={contactRef}><GetInTouch /></div>
    </Fragment>
  )
}

export default App
