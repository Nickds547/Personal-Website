import React from 'react';
import styled from 'styled-components';
import {MyTitle} from '../Styles/HomePage';
import { PieChart } from 'react-minimal-pie-chart';
import {MyContent, Wrapper, Description, Div, Labels, Box, KeyText, KeyTitle, myBackground, Li} from '../Styles/ExperiencePage';
import 'react-animated-css';

const consultingColor = '#DAF7A6';
const ecommerceColor = '#FFC300';
const digitalColor = '#6A2135';
const customAppColor = '#980090 ';


const chartData =  [{ title: 'Consulting', value: 32, color: consultingColor },
                    { title: 'E-commerce Websites', value: 19, color: ecommerceColor },
                    { title: 'Digitial Marketing', value: 35, color: digitalColor },
                    { title: 'Custom App Devlopment', value: 14, color: customAppColor }]

const Experience = () =>{
    return (
        <Wrapper style={{backgroundImage: myBackground, backgroundSize: "cover", paddingBottom: "10vh"}}>
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
                    <Li>
                       Managed the consultation, design, and development phases for a ReactJS/MongoDB web application 
                       intended to replace a volunteer program used by more than 1500 high school students per year
                    </Li>
                    <Li>
                        Researched and enhanced technological solutions for over 20 different businesses by recommending
                        and implementing solutions for a wide range of situations including digital marketing 
                        strategies and e-commerce applications
                    </Li>
                    <Li>
                        Increased the sales and internet presences of many local businesses by developing WordPress 
                        websites utilizing knowledge of HTML, CSS, and PHP to provide effective functionality and user interface design
                    </Li>
                </ul>
            </Description>

            <Labels>
                <KeyTitle>Key:</KeyTitle>
                <dl style={{ width: "100%", float: "left"}}>
                    <Box style={{background: consultingColor}}></Box> 
                    <KeyText >Consulting</KeyText>
                    <Box style={{background: ecommerceColor}}></Box> 
                    <KeyText>E-commerce Websites</KeyText>
                    <Box style={{background: digitalColor }}></Box> 
                    <KeyText >Digital Marketing</KeyText>
                    <Box style={{background: customAppColor }}></Box> 
                    <KeyText>Custom App Devlopment</KeyText>
                </dl>

            </Labels>
        </Wrapper>
    )
}

export default Experience;