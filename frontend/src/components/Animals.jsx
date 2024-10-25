import '../App.css'
function Home() {
  const animals = [
    {
      name: 'Brumma',
      type: 'Brunbjörn',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      weight: '500 kg',
    },
    {
      name: 'Ellie',
      type: 'Elefant',
      imageUrl:
        'https://images.unsplash.com/photo-1567608346847-6d9817e63e8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWZhbnR8ZW58MHx8MHx8fDA%3D',
    },
  ]
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
          {animals.map((person) => (
            <li key={person.name}>
              <div className="card flex gap-x-6 p-4 rounded shadow-lg">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-40 rounded shadow-md w-40"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 ">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-gray-800 ">
                    {person.type}
                  </p>
                  <p className="pt-4 text-sm font-semibold text-gray-800">
                    Vikt: {person.weight}
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
