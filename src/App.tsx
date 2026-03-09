import About from "./components/About"
import NavBar from "./components/NavBar"

import "./App.css"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  )
}

export default App
