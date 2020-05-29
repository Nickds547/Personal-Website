import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 10% 15% 20% auto 15% 10%;
    grid-template-rows: 15% 25% 50% auto;
`;

export const MyTitle = styled.div`
    grid-column: 3 / span 2;
    grid-row: 1 / span 1;
    place-self: center;
    font-weight: bolder;
    font-size: 20pt;
`;

export const Image = styled.div`
    grid-column: 2 / span 2;
    grid-row: 2 / span 2;
    place-self: stretch;
`;

export const  Content = styled.div`
    grid-column: 4 / span 2;
    grid-row: 2 / span 2;
    place-self: center;
    font-weight: bold;
    font-size: 16px;
`;