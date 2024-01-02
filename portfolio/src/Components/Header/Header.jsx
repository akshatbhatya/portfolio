import React, { useEffect, useState } from 'react'
import "./Header.css"

import { Link, NavLink } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";

import Photo from './images/akshat-image.jpg'
import WebLogo from './images/weblogopng.png'
const Header = () => {
    
    let [hide,setHide]=useState(true)

    const photoStyle={
        boxShadow: "15px 15px 0px #9a9999",
    }

    const scrollToProject = () => {
        const projectSection = document.getElementById('project');
    
        if (projectSection) {
          projectSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <>
            <div className="header-parent" >

                <div className="header-section-one">
                    <div className="header-section-one-logo">
                        <a href="" id='home'><h1 className='logo-title'>Akshat</h1></a>

                    </div>
                    <div className="header-section-one-headding" id='home'>
                        <h1>Elevate with<br />
                        Code Mastery</h1>
                        <br />
                        <p>Tech Alchemist and Digital Strategist</p>
                    </div>
                    <div className="header-section-one-paragraph">

                        <p>As a versatile front-end developer, I fuse HTML, CSS, and JavaScript to craft seamless digital experiences. Proficient in WordPress, Python, and React, I blend creativity with code mastery to deliver innovative solutions</p>

                        <div className="header-section-one-buttons">
                            <button onClick={scrollToProject} className='btn-1'>View Projects</button>
                            <a href='https://drive.google.com/uc?export=download&id=1KDe7zPVx8HMSSxktCMYeio6pOEsAi9ZY' className='btn-2'>Download Curriculum Vitae</a>
                        </div>
                    </div>

                </div>
                <div className="header-section-two">


                    <div className="header-section-two-navigation">

                        <nav>
                            <ul className='header-navigation'>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#project">Project</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li></li>
                            </ul>
                        </nav>
                    <div className="headersection-two-navigation-mobile-responsive">
                    <a href=""><h1 class="logo-title-section-two">Akshat</h1></a>
                        <nav>
                        
                        <button onClick={()=>setHide(!hide)}>{hide?<FaBarsStaggered/>:<GiCrossMark/>} </button>

                        {
                            hide?<>
                                 
                                </>:<>
                                <ul className='header-navigation-mobile scale-up-center'>
                                     <li><a href="#home">Home</a></li>
                                    <li><a href="#skills">Skills</a></li>
                                    <li><a href="#project">Project</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li></li>
                                </ul>
                                </>
                        }
                        </nav>
                    </div>
                        <div className="header-section-two-image">

                            <img src={Photo} alt="akshat" width={580}  height={560}style={photoStyle} />
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}


export default Header


