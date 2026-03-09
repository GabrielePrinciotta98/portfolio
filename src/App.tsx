import About from "./components/About"
import NavBar from "./components/NavBar"

import "./App.css"
import Projects from "./components/Projects"

function App() {

  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App
