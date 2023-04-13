
import React from 'react';
import { StyledSelect } from '../../styles/Header/Select.styled';

const Select = props => {
    
    const {onChange} = props
    
    return (
        <StyledSelect onChange={onChange}>
            {props.children}
        </StyledSelect>
    );
}

export default Select;