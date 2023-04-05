
import React from 'react';
import { StyledSelect } from '../styles/Select.styled';

const Select = props => {
    
    return (
        <StyledSelect>
            {props.children}
        </StyledSelect>
    );
}

export default Select;