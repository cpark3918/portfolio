import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';

import Router from 'next/router';

const Container = styled.div`
    min-width: 150px;
`;

const ButtonBox = styled.button`
    min-height: 60px;
    width: 40%;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#8093F1"};
    color: #fff;
    border-radius: 2px;
    border: ${props=>props.border ? props.border : "none"};
    font-family: "GMarketSans";
    font-size: 18px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        opacity: 65%;
        transition: opacity 0.3s;
    }
`;


const Button = ({title, bgcolor, border, onClick}) => {
    return <Container onClick={onClick}>
        <ButtonBox bgcolor={bgcolor} border={border}>{title}</ButtonBox>
    </Container>
}

Button.defaultProps = {
    title: "send",
    bgcolor: null,
    border: null,
    onClick:()=>{}
};

export default Button;