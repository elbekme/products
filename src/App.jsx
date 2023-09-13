import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
  const isAuthLocal = Boolean(localStorage.getItem("isAuth"));
  const [isAuth , setIsAuth] = useState(isAuthLocal);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isAuth ?  <HomePage /> : <Navigate to="/login" />}></Route>
        <Route path='/login' element={<LoginPage setIsAuth={setIsAuth}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
