import About from "./components/About"
import NavBar from "./components/NavBar"

import "./App.css"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from './components/Footer'

import { useState, useEffect } from "react"

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <div className="app">
      <NavBar isDark={isDark} onThemeToggle={() => setIsDark(!isDark)}/>
      <main className="main-content">
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
