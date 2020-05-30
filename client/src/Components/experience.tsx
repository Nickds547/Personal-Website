import React from 'react';
import styled from 'styled-components';
import {MyTitle} from '../Styles/HomePage';
import { PieChart } from 'react-minimal-pie-chart';
import background from '../Assets/abstractEnvelope.svg'
import 'react-animated-css';

const MyContent = styled.div`
    grid-column: 4 / span 2;
    grid-row: 2 / span 2;
    justify-self: center;
    width: 55%;
`;


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 10% 15% 20% auto 15% 10%;
    grid-template-rows: 15% 25% 50% auto;
    height: 100%;
    background-color: #77aa77;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2377aa77'/%3E%3Cstop offset='1' stop-color='%234fd'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
`;

const Description = styled.div`
    grid-column: 2 / span 2;
    grid-row: 2 / span 2;
    justify-self: center;
    align-self: stretch; 
    font-size: 18pt;
    font-weight: bold;
    animation: flipInY;
    animation-duration: 2s;
`;

const Div = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 20pt;
`;

const Labels = styled.div`
    grid-column: 5 / span 1;
    grid-row: 2 / span 2;
    justify-self: end;
    align-self: center;
`;

const Box = styled.dt`
    width: 20px;
    height: 20px;
    float: left;
`;

const KeyText = styled.dd`
    margin-left: 1.5vw;
    font-weight: bolder;
    font-style: sans-serif;
    font-size: 110%;
`;

const KeyTitle = styled.span`
    padding-left: 50%;
    font-weight: bolder;
    font-size: 120%;
`;

const myBackground = `background-color: #77aa77;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2377aa77'/%3E%3Cstop offset='1' stop-color='%234fd'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;`;

const chartData =  [{ title: 'Consulting', value: 32, color: '#E38627' },
                    { title: 'E-commerce Websites', value: 19, color: '#C13C37' },
                    { title: 'Digitial Marketing', value: 35, color: '#6A2135' },
                    { title: 'Custom App Devlopment', value: 14, color: '#FF5733' }]

const Experience = () =>{
    return (
        <Wrapper style={{backgroundImage: myBackground, backgroundSize: "cover"}}>
            <MyTitle>Work Experience</MyTitle>
            <MyContent>
                <Div>Types of Projects Completed</Div>
                <PieChart
                    label={({dataEntry}) => dataEntry.value + "%"}
                    style={{width:"100%", height: "100%", paddingTop: "2vh"}}
                    data={chartData}
                    animate={true}
                    labelPosition={60}
                    />
            </MyContent>
            
            <Description>
                <ul>
                    <span style={{fontWeight: "bolder", textAlign:"left", fontSize: "20pt"}}>
                        Louisiana Small Business Development Center <div style={{textAlign: "left"}}>Jun 2018 - May 2020</div>
                    </span>
                    <li>
                       Managed the consultation, design, and development phases for a ReactJS/MongoDB web application 
                       intended to replace a volunteer program used by more than 1500 high school students per year
                    </li>
                    <li>
                        Researched and enhanced technological solutions for over 20 different businesses by recommending
                        and implementing solutions for a wide range of situations including digital marketing 
                        strategies and e-commerce applications
                    </li>
                    <li>
                        Increased the sales and internet presences of 5 local businesses by developing WordPress 
                        websites utilizing knowledge of HTML, CSS, and PHP to provide effective functionality and user interface design
                    </li>
                </ul>
            </Description>

            <Labels>
                <KeyTitle>Key:</KeyTitle>
                <dl style={{ width: "100%", float: "left"}}>
                    <Box style={{background: "#E38627"}}></Box> 
                    <KeyText >Consulting</KeyText>
                    <Box style={{background: "#C13C37"}}></Box> 
                    <KeyText>E-commerce Websites</KeyText>
                    <Box style={{background: "#6A2135" }}></Box> 
                    <KeyText >Digital Marketing</KeyText>
                    <Box style={{background: "#FF5733" }}></Box> 
                    <KeyText>Custom App Devlopment</KeyText>
                </dl>

            </Labels>
        </Wrapper>
    )
}

export default Experience;