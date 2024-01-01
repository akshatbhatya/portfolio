import React from 'react'
import Project from '../Projects/Project'
import "./ProjectContainer.css"
import Title from '../../Components/Title/Title'

function ProjectContainer({ ProjectData }) {
    return (
        <div className='project-container-parent'>
            <Title title={"My Projects"} />

        
                
              <Project data={ProjectData} />
                
            

        </div>
    )
}

export default ProjectContainer
