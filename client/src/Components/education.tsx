import React from 'react';
import styled from 'styled-components';
import {Wrapper, Description, Li} from '../Styles/ExperiencePage'
import {MyTitle} from '../Styles/HomePage'
import logo from '../Assets/ULMMsvg.svg'

const SubTitle = styled.div`
    grid-column: 3 / span 2;
    grid-row: 2 / span 1;
    justify-self: center;
    font-size: 18pt;
    font-weight: bold;
    padding-top: 2vh;
`;

const Logo = styled.div`
    grid-column: 1 / span 3;
    grid-row: 2 / span 2;
    align-self:end;
    height: 85%;
    width: 85%;
`;

const Img = styled.img`
    height: 100%;
    width: 100%;
`;

const Content = styled.div`
    grid-column: 4 / span 2;
    grid-row: 3 / span 2;
    font-size: 18pt;
    font-weight: bold;
`;
const Education = () => { 
    return(
        <Wrapper>
            <MyTitle>Education</MyTitle>
            <SubTitle>Bachelor of Science: Computer Science - University of Lousiana Monroe</SubTitle>
            <Logo><a target="_blank" href="https://www.ulm.edu/"><Img src={logo}/></a></Logo>
            <Content>
                <ul>
                    <Li>
                        Completed coursework in Algorithm Design and Efficiency, Database Management 
                        and Design, Principles of Software Engineering, Object-Oriented Design 
                        and Principles, Advanced Topics for Computer Science, and Internet Programming
                    </Li>
                    <Li>Member of the Association for Computer Machinery for 2 years</Li>
                    <Li>Awarded second place in the university's Startup Business Pitch Competition out of 25 teams</Li>
                </ul>

            </Content>
            
        </Wrapper>
    )
}

export default Education; 