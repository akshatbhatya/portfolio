import React from 'react'
import Title from '../../Components/Title/Title';
import "./Contact.css"

function Contact() {
    let currentYear = new Date().getFullYear();

    const contactparent={
        height: 'auto',
        width: '100%',
        background: 'linear-gradient(147deg, #1E1F1D 1.46%, #1A1C18 99.06%)',
        padding:'0px 100px',
        
    }

    const mediaQueryStyle={
        padding:'0px 20px',

    }
    return (
        <>
            <div style={{...contactparent , ...(window.innerWidth < 861 && mediaQueryStyle)}}>
                <Title title={"Lets Talk"} />
                <br />
                <br />
                <br />
                <div className="contact-container" id='contact'>

                    <div className="contact-socialmedialinks">

                        <span><p>Phone : <a href="tel:7814720746">781-4720-746</a></p></span>
                        <br />

                        <span><p>E-Mail : <a href="mailto:akshatbhatya@outlook.com">akshatbhatya@outlook.com</a></p></span>

                        <br />

                    </div>
                    <div className="contact-social-link-section-two">
                        <span><p>LinkedIn : <a href="https://www.linkedin.com/in/akshat-bhatya-akku?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">See Profile..</a></p></span>

                        <br />
                        <span><p>Instagram : <a href="https://www.instagram.com/akshatbhatia.official?igsh=bWUxNHF3OGExdmNk">See Profile..</a></p></span>

                    </div>


                    <div className="photo">
                        <p>Ready to elevate your projects with a blend of innovation, creativity, and expertise. Let's turn ideas into exceptional realities together. Hire me for a journey beyond the ordinary.</p>
                    </div>


                </div>




            </div>
            <div className="contact-copiright">
                <p>{currentYear} | Desigined By Akshat With 💖</p>
            </div>
        </>
    )
}

export default Contact; 
