import React from 'react';
import { StyledClosedButton } from '../styles/ClosedButton.styled';

const ClosedButton = props => {
    const {onClick, size} = props
    
    return (
        <StyledClosedButton size={size} onClick={onClick}>
            <img src='https://cdn-icons-png.flaticon.com/512/2961/2961937.png' alt='close'/>
        </StyledClosedButton>
    );
}

export default ClosedButton;