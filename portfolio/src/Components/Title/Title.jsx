import React from 'react'
import "./title.css"

function Title({title}) {
  return (
    <div>
        <div className="title-parent-section">
            <div className="title-bar-section">
                <hr className='bar' />

            </div>
            <div className="title-title-of-component">
                <h2>{title}</h2>

            </div>
        </div>
      
    </div>
  )
}

export default Title
