import React from 'react'
import "./ProgressBar.css"

function ProgressBar({ progress = 10, skill='html' }) {

    const progressBarParent = {
        height: "1.5rem",
        width: "100 %",
        borderRadius: "12px",
        margin: "1rem",
        border: "2px solid white",
    }

    const progressbarChild = {
        height: 'auto',
        width: `${progress}%`,
        backgroundColor: "#ADD8E6",
        borderRadius: "12px",
        border: 'none'
    }
    return (
        <div>
            <br />
            <div className="title">
                <h2>{skill}</h2>
            </div>
            <div className="progressbar-parent" style={progressBarParent}>
                <div className="progressbar-child" style={progressbarChild}>
                    <p className='text'> {progress}%</p>
                </div>
            </div>

        </div>
    )
}

export default ProgressBar
