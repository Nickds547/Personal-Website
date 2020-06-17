import React, {useState} from 'react';
import styled from 'styled-components';
import {MyTitle} from '../Styles/HomePage'
import {agile,aws,css,github,html,java,javaScript,perl,php,python,reactLogo,spring,sql,typescript, consulting} from '../Assets'


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto;
    height: 100%;
    background-color: #cdcfb3;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23cdcfb3' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%23c9cbaf' href='%23s' y='2'/%3E%3Cuse fill='%23c9cbaf' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23c5c7ac' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23c5c7ac' href='%23s'/%3E%3Cuse fill='%23c1c3a8' href='%23s' x='2'/%3E%3Cuse fill='%23c1c3a8' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23bdbea5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23bdbea5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23b8baa1'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23cdcfb3'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23b4b69e'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    
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
    padding-bottom: 1%;
`;

const Bar = styled.div`
    background-color: black;
    width: 100%
    height: 100%
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
        <Wrapper style={{paddingBottom: "2%"}}>
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