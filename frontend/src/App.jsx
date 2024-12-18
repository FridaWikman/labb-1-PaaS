import Animals from './components/Animals'
import AddAnimal from './components/AddAnimal'
import logo from './assets/minizoo.png'
import './App.css'

function App() {
  return (
    <main className="p-16 main">
      <div className="flex flex-row w-full justify-start">
        <img src={logo} alt="logo" className="max-w-72" />
      </div>
      <Animals></Animals>
      <AddAnimal></AddAnimal>
    </main>
  )
}

export default App
