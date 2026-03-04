import About from "./components/About"
import NavBar from "./components/NavBar"

import "./App.css"

function App() {

  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <About />
      </main>
    </div>
  )
}

export default App
