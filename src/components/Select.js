
import React from 'react';
import { StyledSelect } from '../styles/Select.styled';

const Select = props => {
    
    return (
        <StyledSelect>
            <option value=""> Member</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
        </StyledSelect>
    );
}

export default Select;