import React from 'react';
import headshot from '../Assets/headshot.svg'
import {Wrapper, MyTitle, Image, Content} from '../Styles/HomePage'
import 'react-animated-css';


const Title = () =>
{
    return(
        <Wrapper>
            <MyTitle>Nicholas Salter | Computer Scientist</MyTitle>
                <Image>
                    <img 
                        className={"animate__animated animate__fadeInLeft animate__slow"}
                        style={{width: "100%", height: "100%"}} 
                        src={headshot}
                        />
                </Image>
            <Content className={"animate__animated animate__fadeInDown animate__slow"}>
                Hello! My name is Nicholas Salter and I am a recent graduate from the University of Louisiana
                Monroe, where I received my bachelor’s degree in Computer Science. I am currently looking for 
                full-time employment as a Software engineer. <br/>
                <br/>
                Before graduating I worked as a Computer Analyst at the Louisiana Small Business Development 
                Center on campus. While there, I gained experience in client consulting, problem-solving, software 
                development, e-commerce web development, project management, user-interface design, and marketing. 
            </Content>
        </Wrapper>
    )
}

export default Title;