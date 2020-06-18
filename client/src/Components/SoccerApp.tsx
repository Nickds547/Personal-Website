import React from 'react';
import styled from 'styled-components'
import calendar from '../Assets/SoccerAppPictures/calendar.svg';
import users from '../Assets/SoccerAppPictures/users.svg';
import {Button} from 'antd';
import {MyTitle} from '../Styles/HomePage';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 10% 15% 20% auto 15% 10%;
    grid-template-rows: 15% 25% 50% auto;
    height: 100%;
    padding-top: 2vh;
`;

const Cal = styled.img`

`;

const SoccerApp = ({setProject}: any) =>{
    return(
        <>
        <Wrapper>
            <MyTitle>Soccer Scheduling App</MyTitle>
        </Wrapper>
        <Button onClick={()=>setProject("home")}>Go Back</Button>
        </>
    )
}

export default SoccerApp; 