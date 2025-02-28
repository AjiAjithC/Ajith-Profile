import { useState } from 'react'
import './App.css'
import Header from './js/Header/Header'
import Home from './js/Home/Home'
import AboutMe from './js/AboutMe/AboutMe'
import MyExperience from './js/MyExperience/MyExperience'
import Project from './js/Project/Project'
import Contact from './js/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <MyExperience />
      <Project />
      <Contact/>

      {/* <div className='h-100' /> */}

    </>
  )
}

export default App
