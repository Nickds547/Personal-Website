import React, {useState} from 'react';
import styled from 'styled-components';
import {MyTitle} from '../Styles/HomePage'
import {agile,aws,css,github,html,java,javaScript,perl,php,python,reactLogo,spring,sql,typescript, consulting} from '../Assets'


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto;
    height: 100%;
    background-color: #929292;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 160 80'%3E%3Cg fill='%23cfcfcf' %3E%3Cpolygon points='0 10 0 0 10 0'/%3E%3Cpolygon points='0 40 0 30 10 30'/%3E%3Cpolygon points='0 30 0 20 10 20'/%3E%3Cpolygon points='0 70 0 60 10 60'/%3E%3Cpolygon points='0 80 0 70 10 70'/%3E%3Cpolygon points='50 80 50 70 60 70'/%3E%3Cpolygon points='10 20 10 10 20 10'/%3E%3Cpolygon points='10 40 10 30 20 30'/%3E%3Cpolygon points='20 10 20 0 30 0'/%3E%3Cpolygon points='10 10 10 0 20 0'/%3E%3Cpolygon points='30 20 30 10 40 10'/%3E%3Cpolygon points='20 20 20 40 40 20'/%3E%3Cpolygon points='40 10 40 0 50 0'/%3E%3Cpolygon points='40 20 40 10 50 10'/%3E%3Cpolygon points='40 40 40 30 50 30'/%3E%3Cpolygon points='30 40 30 30 40 30'/%3E%3Cpolygon points='40 60 40 50 50 50'/%3E%3Cpolygon points='50 30 50 20 60 20'/%3E%3Cpolygon points='40 60 40 80 60 60'/%3E%3Cpolygon points='50 40 50 60 70 40'/%3E%3Cpolygon points='60 0 60 20 80 0'/%3E%3Cpolygon points='70 30 70 20 80 20'/%3E%3Cpolygon points='70 40 70 30 80 30'/%3E%3Cpolygon points='60 60 60 80 80 60'/%3E%3Cpolygon points='80 10 80 0 90 0'/%3E%3Cpolygon points='70 40 70 60 90 40'/%3E%3Cpolygon points='80 60 80 50 90 50'/%3E%3Cpolygon points='60 30 60 20 70 20'/%3E%3Cpolygon points='80 70 80 80 90 80 100 70'/%3E%3Cpolygon points='80 10 80 40 110 10'/%3E%3Cpolygon points='110 40 110 30 120 30'/%3E%3Cpolygon points='90 40 90 70 120 40'/%3E%3Cpolygon points='10 50 10 80 40 50'/%3E%3Cpolygon points='110 60 110 50 120 50'/%3E%3Cpolygon points='100 60 100 80 120 60'/%3E%3Cpolygon points='110 0 110 20 130 0'/%3E%3Cpolygon points='120 30 120 20 130 20'/%3E%3Cpolygon points='130 10 130 0 140 0'/%3E%3Cpolygon points='130 30 130 20 140 20'/%3E%3Cpolygon points='120 40 120 30 130 30'/%3E%3Cpolygon points='130 50 130 40 140 40'/%3E%3Cpolygon points='120 50 120 70 140 50'/%3E%3Cpolygon points='110 70 110 80 130 80 140 70'/%3E%3Cpolygon points='140 10 140 0 150 0'/%3E%3Cpolygon points='140 20 140 10 150 10'/%3E%3Cpolygon points='140 40 140 30 150 30'/%3E%3Cpolygon points='140 50 140 40 150 40'/%3E%3Cpolygon points='140 70 140 60 150 60'/%3E%3Cpolygon points='150 20 150 40 160 30 160 20'/%3E%3Cpolygon points='150 60 150 50 160 50'/%3E%3Cpolygon points='140 70 140 80 150 80 160 70'/%3E%3C/g%3E%3C/svg%3E");
    `;

const Div = styled.div`
    place-self: stretch;
    font-weight: bold;
    font-size: 20px;
    height:100%;
    width: 100%;
`;

const Image = styled.img`
    width:10vw;
    height:16vh;
    margin-left:25%;
`;

const Name = styled.div`
    text-align: center;
    font-size: 18pt;
`;

const skills = [{name: "React.js", img: reactLogo}, {name:"JavaScript", img: javaScript}, {name:"PHP", img: php},
                {name:"TypeScript", img: typescript}, {name:"HTML", img: html}, {name:"CSS", img: css}, 
                {name:"Spring Boot", img: spring}, {name:"SQL", img: sql}, {name:"Agile Methodology", img: agile},
                {name:"GitHub", img: github}, {name:"Consulting", img: consulting}, {name:"Python", img: python},
                {name:"Java", img: java}, {name:"AWS", img: aws}, {name:"Perl", img: perl}]

const Skills = () =>{

   let row = 1;

    const rowCheck = (index:number) => {
        let temp = 0;
        console.log("Index" + index)
        if(index % 4 == 0)
        {
            temp = row + 1;
            row = temp;

            console.log("row" + row)
        }

        return temp;
    }

    return(
        <Wrapper>
            <MyTitle style={{paddingBottom: "10%"}}>Skills</MyTitle>
            {skills.map((skill, i)=>
                <Div style={{gridColumn: i%4 + 2, gridRow: rowCheck(i)}}>
                    <Image src={skill.img} />
                    <Name>{skill.name}</Name>
                </Div>
            )}
            
        </Wrapper>
    )
}

export default Skills;