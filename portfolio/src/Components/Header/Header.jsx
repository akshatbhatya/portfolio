import React, { useState } from 'react'
import "./Header.css"

import { Link, NavLink } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";

const Header = () => {
    
    let [hide,setHide]=useState(true)

    return (
        <>
            <div className="header-parent">

                <div className="header-section-one">
                    <div className="header-section-one-logo">
                        <a href=""><h1 className='logo-title'>Akshat</h1></a>

                    </div>
                    <div className="header-section-one-headding">
                        <h1>Be Creative,<br />
                            Be Impressive</h1>
                        <br />
                        <p>Creative Designer and Social Media Officer</p>
                    </div>
                    <div className="header-section-one-paragraph">

                        <p>I have to be able to communicate ideas to a wide range of stakeholders in both my own voice and in Sprout's. Communicating on social.</p>

                        <div className="header-section-one-buttons">
                            <button className='btn-1'>Portfolio</button>
                            <a href='' className='btn-2'>Download Curriculum Vitae</a>
                        </div>
                    </div>

                </div>
                <div className="header-section-two">


                    <div className="header-section-two-navigation">

                        <nav>
                            <ul className='header-navigation'>
                                <li><a href="">Home</a></li>
                                <li><a href="about">About</a></li>
                                <li><a href="">Project</a></li>
                                <li><a href="">Contact</a></li>
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
                                     <li><a href="">Home</a></li>
                                    <li><a href="about">About</a></li>
                                    <li><a href="">Project</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li></li>
                                </ul>
                                </>
                        }
                        </nav>
                    </div>
                        <div className="header-section-two-image">

                            <img src="https://picsum.photos/500/500/?blur" alt="" />
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}


export default Header


