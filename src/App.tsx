import { Fragment } from 'react/jsx-runtime'
import './App.css'
import ByTheNumber from './components/sections/ByTheNumber'
import About from './components/sections/About'
import Ventures from './components/sections/Ventures'
import Footer from './components/sections/Footer'

function App() {

  return (
    <Fragment>
      <ByTheNumber />
      <About />
      <Ventures />
      <Footer />
    </Fragment>
  )
}

export default App
