import React from 'react'
import "./Skills.css"
import Title from '../../Components/Title/Title';
import SkillsBox from '../../Components/Skills-Box/SkillsBox';


let data=[
    {title:"HTML, CSS, JavaScript",
    para:"Front-end development involves creating web interfaces. HTML provides structure, CSS styles the design, and JavaScript adds interactivity. Combined, they create dynamic and visually appealing websites.",
    image:"https://cdn-icons-png.flaticon.com/128/7991/7991055.png"

    
    },
    {title:"WordPress",
    para:"WordPress is a popular content management system (CMS) for building websites. It's open-source, customizable, and user-friendly, offering themes and plugins to create diverse websites without extensive coding skills.",
    image:"		https://cdn-icons-png.flaticon.com/128/270/270832.png"

    
    },
    {title:"React",
    para:"Learning React, a JavaScript library for building user interfaces, involves creating components that update dynamically. It uses a virtual DOM for efficiency and is widely used for modern web development.",
    image:"https://cdn-icons-png.flaticon.com/128/1260/1260667.png"

    
    },
]

function Skills() {
    return (

        <>
            <div className="skills-parentContainer">
                <div className="skills-title">
                    <Title title={"My Skills"} />

                </div>
                <div className="skills-all-skills">
                    <div className="skills-section-one">
                        {
                            data.map((data)=>{
                                return <SkillsBox  title={data.title} para={data.para} image={data.image} />
                            })
                        }

                        <br />
                        <div className="skills-section-two">
                            
                        </div>


                    </div>






                </div>
            </div>
        </>
    )
}

export default Skills;