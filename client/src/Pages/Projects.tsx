import React, {useState} from 'react';
import SoccerApp from '../Components/SoccerApp';
import ProjectSelect from '../Components/ProjectSelect';

const Projects = () =>{

    const [project, setProject] = useState("home");


    return(
        <>
            {project == "home" && <ProjectSelect setProject={setProject}/>}
            {project == "soccer" && <SoccerApp setProject={setProject}/>}
        </>
    )
}
export default Projects;