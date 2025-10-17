
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Agents from './pages/Agents.jsx'

const App = () => {
  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agents' element={<Agents />} />
        <><h1>LazyVim testing</h1></>
      </Routes>
    </div>
  )
}

export default App
