import { useEffect } from 'react'
import './App.css'
import { Header } from "./Components/Index"
import Skills from './Container/Skills/Skills';
import Devider from './Components/Devider/Devider';
import Project from './Container/Projects/Project';
import ProjectContainer from './Container/Project-Container/ProjectContainer';
import { ProjectData } from './Container/Projects/ProjectData';
import Contact from './Container/Contact/Contact';
import Contactform from './Container/Contact form/Contact form';

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
      <Devider />
      <Skills />
      <Devider />
      <ProjectContainer ProjectData={ProjectData}  />
      <Devider/>
      <Contactform/>
      <Devider/>
      <Contact/>
     
      
    </>
  )
}

export default App
