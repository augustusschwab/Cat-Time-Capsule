import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <main >
        <Outlet />
      </main>
    </>
  )
}

export default App
