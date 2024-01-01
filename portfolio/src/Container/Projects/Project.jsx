import React from 'react'

import "./Project.css"
import Title from '../../Components/Title/Title';

function Project({data}) {
    return (

        <div className='project-parent' id='project'>
           

           { data.map((data)=>{
            return <div className="container" key={data.title}>
            <div className="card">
                <img
                    src={data.img}
                    alt="First Image"
                />
                <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p className="card-text">
                        {data.detail}
                    </p>

                    <div className="card-btn">

                        <a href={data.btn1link} className="btn">
                            {data.btn1}
                        </a>
                        <a href={data.btn2link} className="btn">
                            Get Code
                        </a>
                    </div>
                </div>
            </div>

        </div>

           })}


        </div>
            
    );
};



export default Project
