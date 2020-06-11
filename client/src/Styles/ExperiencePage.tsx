import styled from 'styled-components';
import 'react-animated-css';

export const MyContent = styled.div`
    grid-column: 3 / span 2;
    grid-row: 2 / span 2;
    justify-self: end;
    width: 55%;
`;


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 10% 15% 20% auto 15% 10%;
    grid-template-rows: 15% 25% 50% auto;
    height: 100%;
    background-color: #77aa77;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2377aa77'/%3E%3Cstop offset='1' stop-color='%234fd'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    padding-bottom: 20vh;
    
`;

export const Description = styled.div`
    grid-column: 1 / span 3;
    grid-row: 2 / span 2;
    justify-self: center;
    align-self: stretch; 
    font-size: 18pt;
    font-weight: bold;
    animation: flipInY;
    animation-duration: 2s;
`;

export const Div = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 20pt;
`;

export const Labels = styled.div`
    grid-column: 5 / span 2;
    grid-row: 2 / span 2;
    justify-self: center;
    align-self: center;
`;

export const Box = styled.dt`
    width: 20px;
    height: 20px;
    float: left;
`;

export const KeyText = styled.dd`
    margin-left: 1.5vw;
    font-weight: bolder;
    font-style: sans-serif;
    font-size: 110%;
`;

export const KeyTitle = styled.span`
    padding-left: 25%;
    font-weight: bolder;
    font-size: 120%;
    text-align: left;
`;

export const myBackground = `background-color: #77aa77;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2377aa77'/%3E%3Cstop offset='1' stop-color='%234fd'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;`;

export const Li = styled.li`
    padding-top: 1vh;
`;