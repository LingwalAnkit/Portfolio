import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/themeContext'

function App() {
  const [themeMode , setThemeMode] = useState("light")
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <>
        <ThemeProvider  value={{themeMode , lightTheme , darkTheme}}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </ThemeProvider>
    </>
  )
}

export default App
