import React from 'react'
import "./SkillBox.css"
function SkillsBox({title,image,para}) {
  return (
    <div className='skills-box-parent'>

        <div className="skills-box-image">
            <img src={image} alt='image'/>

        </div>
        <div className="skills-box-content">
            <div className="skillbox-title">
                <h2>{title}</h2>

            </div>
            <br />
            <div className="skillbox-para">
                <p>{para}</p>
            </div>
        </div>

      
    </div>
  )
}

export default SkillsBox
