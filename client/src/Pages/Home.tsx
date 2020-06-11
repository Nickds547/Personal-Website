import React from 'react';
import 'react-animated-css';
import Title from '../Components/title';
import Experience from '../Components/experience';
import Education from '../Components/education'
import Skills from '../Components/skills';

const Home = () =>
{
    return(
        <>
            <Title/>
            <Experience/>
            <Education/>
            <Skills/>
        </>
    )
}

export default Home; 