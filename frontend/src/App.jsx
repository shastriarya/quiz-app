import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer"
import NavBar from './components/NavBar'
import Landing from './pages/Landing'
import Quiz from './pages/Quiz'
import {ToastContainer} from 'react-toastify'



const App = () => {
  return (
    <div >
     <ToastContainer/>
     <NavBar/>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/quizes' element={<Quiz/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
