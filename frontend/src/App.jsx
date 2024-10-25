import Animals from './components/Animals'
import AddAnimal from './components/AddAnimal'
import logo from './assets/minizoo.png'
import './App.css'
// import {
//   createHashRouter,
//   Link,
//   Outlet,
//   RouterProvider,
// } from 'react-router-dom'

function App() {
  return (
    <main className="p-16 main">
      <div className="flex flex-row w-full justify-end">
        <img src={logo} alt="logo" className="max-w-72" />
      </div>
      <Animals></Animals>
      <AddAnimal></AddAnimal>
    </main>
  )

  // const router = createHashRouter([
  //   {
  // children: [
  //   {
  //     element: <Home />,
  //     path: '/',
  //   },
  //   {
  //     element: <AddAnimal />,
  //     path: '/add-animal',
  //   },
  // ],
  // element: (
  //   <>
  // {/* <nav className="flex mt-4 px-8 lg:px-10">
  //   <h1 className="ml-6">MiniZoo</h1>
  //   <div className="flex grow justify-center space-x-10">
  //     <ul className="flex flex-end space-x-4 mr-6">
  //       <li>
  //         <Link to="/">Djur</Link>
  //       </li>
  //       <li>
  //         <Link to="/add-animal">Lägg till ett djur</Link>
  //       </li>
  //     </ul>
  //   </div>
  // </nav> */}
  // <main className="h-screen main">
  //   <Outlet />
  // </main>
  // </>
  //     ),
  //   },
  // ])
  // return <RouterProvider router={router} />
}

export default App
