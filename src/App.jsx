import Header from './Header'
import About from './About'

import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ProjectsPage from './ProjectsPage'

import './App.css'

function App() {

  return (
    <div className='main-container'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
