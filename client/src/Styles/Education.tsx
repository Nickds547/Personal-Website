import React from 'react';
import styled from 'styled-components';

export const SubTitle = styled.div`
    grid-column: 3 / span 2;
    grid-row: 2 / span 1;
    justify-self: center;
    font-size: 18pt;
    font-weight: bold;
    padding-top: 2vh;
`;

export const Logo = styled.div`
    grid-column: 1 / span 3;
    grid-row: 2 / span 2;
    align-self:end;
    height: 85%;
    width: 85%;
`;

export const Img = styled.img`
    height: 100%;
    width: 100%;
`;

export const Content = styled.div`
    grid-column: 4 / span 2;
    grid-row: 3 / span 2;
    font-size: 18pt;
    font-weight: bold;
`;