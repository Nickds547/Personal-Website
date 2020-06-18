import React from 'react';
import styled from 'styled-components';
import calendar from '../Assets/SoccerAppPictures/calendar.svg';
import {Button} from 'antd';


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 10% 15% auto 15% 10%;
    grid-template-rows: 15% 25% 50% auto;
    height: 100%;
    padding-top: 2vh;
`;

const Header = styled.div`
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
    font-weight: bolder;
    font-size: 22pt;
    place-self: center;
`;

const Title = styled.div`
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    font-weight: bolder;
    font-size: 22pt;
    place-self: center;
`;

const Img = styled.img`
    grid-column: 2 / span 2;
    grid-row: 3 / span 2;
    height: 40vh;
    width: 40vw
    place-self: stretch;
`;
const Description = styled.div`
    grid-column: 3 / span 2;
    grid-row: 3 / span 1;
    place-self: end;
    font-weight: bolder;
    font-size: 18pt;
`;

const ProjectSelect = ({setProject}: any) =>{
    return(
        <>
            <Wrapper>
                <Header>My Projects</Header>
                <Title>Soccer App</Title>
                <Img src={calendar} />
                <Description>Soccer Scheduling App, built for Software Engineering <br/>
                            Capstone Project. Made using React.js, Spring Boot, and hosted on AWS <br/>
                            <Button onClick={()=>setProject("soccer")}>See More!</Button>
                
                
                </Description>

            </Wrapper>

        </>
    )
}

export default ProjectSelect;