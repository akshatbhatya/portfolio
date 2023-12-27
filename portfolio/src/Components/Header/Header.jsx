import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="header-parent">

                <div className="header-section-one">
                    <div className="header-section-one-logo">

                    </div>
                    <div className="header-section-one-headding">
                        <h1>Be Creative,
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
                                <li><a href="">About</a></li>
                                <li><a href="">Project</a></li>
                                <li><a href="">Contact</a></li>
                                <li></li>
                            </ul>
                        </nav>
                    </div>

                    <img src="" alt="" />

                </div>

            </div>
        </>
    )
}

export default Header