import { useEffect } from 'react'
import './App.css'
import { Header } from "./Components/Index"
import Skills from './Container/Skills/Skills';
import Devider from './Components/Devider/Devider';

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
      <Devider/>
      <Skills/>
      <Devider/>
      <Skills/>
    </>
  )
}

export default App
