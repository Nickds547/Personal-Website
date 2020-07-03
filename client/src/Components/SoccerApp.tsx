import React from 'react';
import styled from 'styled-components'
import calendar from '../Assets/SoccerAppPictures/calendar.svg';
import users from '../Assets/SoccerAppPictures/users.svg';
import gm from '../Assets/SoccerAppPictures/gameManager.svg';
import gf from '../Assets/SoccerAppPictures/gameForm.svg';
import {Button} from 'antd';
import {MyTitle} from '../Styles/HomePage';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% auto;
    grid-template-rows: 15% 25% 50% auto;
    height: 100%;
    padding-top: 2vh;
    font-size: 18pt;
    font-weight: bold;
`;

const Cal = styled.img`
    grid-column: 2 / span 3;
    grid-row: 2 / span 2;
    justify-self: center;
    place-self: stretch;
`;

const Description = styled.div`
    grid-column: 2 / span 3;
    grid-row: 4 / span 1;
    justify-self: center;
`;

const Features = styled.div`
    grid-column: 5 / span 1;
    grid-row: 2/ span 2;
    justify-self: center;
`;

const SubTitle = styled.span`
   text-decoration: underline;
   font-weight: bolder;
   margin-left: 10%;
`;

const Title1 = styled.div`
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
    justify-self: center;
    align-self: end;
`;
const Pic1 = styled.img`
    grid-column: 1 / span 2;
    grid-row: 2 / span 3;
    place-self: stretch;
    justify-self: center;
    width: 90%;
`;

const Title2 = styled.div`
    grid-column: 3 / span 2;
    grid-row: 1 / span 1;
    justify-self: center;
    align-self: end;
`;
const Pic2 = styled.img`
    grid-column: 3 / span 2;
    grid-row: 2 / span 3;
    place-self: stretch;
    justify-self: center;
    width: 90%;
`;

const Title3 = styled.div`
    grid-column: 5 / span 2;
    grid-row: 1 / span 1;
    justify-self: center;
    align-self: end;
`;
const Pic3 = styled.img`
    grid-column: 5 / span 2;
    grid-row: 2 / span 3;
    place-self: stretch;
    justify-self: center;
    width: 90%;
`;



const SoccerApp = ({setProject}: any) =>{
    return(
        <>
        <Wrapper>
            <MyTitle>Soccer Scheduling App</MyTitle>
            <Cal src={calendar}/>
            <Description>
                The Soccer Scheduling app was built for ULM's software engineering class as a tool to assist coaches in North East Louisiana. It's main function 
                was to automate the process of accepting game details and finding schedule conflicts. 
            </Description>
            <Features>
                <SubTitle>Included Features:</SubTitle>
                <ul>
                    <li>Dynamic form for adding games</li>
                    <li>Master schedule showing all scheduled games</li>
                    <li>Multiple calendar filters</li>
                    <li>Email notifications</li>
                    <li>Admin ability to block days</li>
                    <li>Arbiter Export for use in third party application</li>
                    <li>Game Manager for seeing list of all relevant games</li>
                    <li>Add Games through spreadsheet</li>
                </ul>
            </Features>
        </Wrapper>
        <Wrapper style={{marginTop: "5%"}}>
            <Title1>User Controller</Title1>
            <Pic1 src={users}/>

            <Title2>Game Manager</Title2>
            <Pic2 src={gm}/>

            <Title3>Dynamic Game Form</Title3>
            <Pic3 src={gf}/>
        </Wrapper>
        <Button style={{marginLeft: "45%", marginTop: "5%", marginBottom: "5%"}} onClick={()=>setProject("home")}>Go Back</Button>
        </>
    )
}

export default SoccerApp; 