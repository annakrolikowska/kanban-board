import React from 'react';
import { StyledButton } from '../styles/Button.styled';


const Button = props => {
    const {onClick, type} = props
    
    return (
        <StyledButton type={type} onClick={onClick}>
        {props.children}
        </StyledButton>
    );
}

export default Button;