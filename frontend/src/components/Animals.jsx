import '../App.css'
import { useEffect, useState } from 'react'
function Home() {
  const [animals, setAnimals] = useState([])

  const fetchAnimals = async () => {
    try {
      const response = await fetch('/api')
      const result = await response.json()
      setAnimals(result)
    } catch (error) {
      console.error('Error fetching animals:', error)
    }
  }

  useEffect(() => {
    fetchAnimals()
  }, [])

  return (
    <div className="py-16 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Möt våra djur
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600"></p>
          På MiniZoo kan du träffa flera fanatstiska individer. Läs mer om några
          av dem här.
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {animals.map((animal) => (
            <li key={animal.name}>
              <div className="card flex gap-x-6 p-4 rounded shadow-lg">
                <img
                  alt=""
                  src={animal.image}
                  className="h-40 rounded shadow-md w-40"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 ">
                    {animal.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-gray-800 ">
                    {animal.type_name}
                  </p>
                  <p className="pt-4 text-sm font-semibold text-gray-800">
                    Vikt: {animal.weight}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
