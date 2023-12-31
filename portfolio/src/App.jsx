import { useEffect } from 'react'
import './App.css'
import { Header } from "./Components/Index"
import { Outlet } from "react-router-dom"

function App() {
 

  useEffect(() => {
  
    const handleVisibilityChange = () => {
      document.title = document.hidden ? '😢 Akshat | Web Developer ' : '😊 Akshat | Web Developer ';
    };

     document.addEventListener('visibilitychange', handleVisibilityChange);

  }, []);

  return (

    
    <>
      <Header />
    </>
  )
}

export default App
