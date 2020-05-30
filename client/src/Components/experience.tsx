import React from 'react';
import styled from 'styled-components';
import {MyTitle, Wrapper} from '../Styles/HomePage';
import { PieChart } from 'react-minimal-pie-chart';

const MyContent = styled.div`
    grid-column: 4 / span 2;
    grid-row: 2 / span 2;
    justify-self: center;
    width: 60%;
`;

const Description = styled.div`
    grid-column: 2 / span 2;
    grid-row: 2 / span 2;
    justify-self: stretch;
    align-self: stretch; 
    font-size: 18pt;
    font-weight: bold;

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

const chartData =  [{ title: 'Consulting', value: 32, color: '#E38627' },
                    { title: 'E-commerce Websites', value: 19, color: '#C13C37' },
                    { title: 'Digitial Marketing', value: 35, color: '#6A2135' },
                    { title: 'Custom App Devlopment', value: 14, color: '#FF5733' }]

const Experience = () =>{
    return (
        <Wrapper>
            <MyTitle>Work Experience</MyTitle>
            <MyContent>
                <Div>Number of Projects</Div>
                <PieChart
                    label={({dataEntry}) => dataEntry.value + "%"}
                    style={{width:"100%", height: "100%"}}
                    data={chartData}
                    animate={true}
                    labelPosition={60}
                    />
            </MyContent>
            
            <Description>
                <ul>
                    <span style={{fontWeight: "bolder", textAlign:"center", fontSize: "20pt"}}>Louisiana Small Business Development Center</span>
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