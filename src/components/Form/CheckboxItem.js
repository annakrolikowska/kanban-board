import React from 'react';
import { StyledCheckboxItem } from '../../styles/Form/CheckboxItem.styled';


const CheckboxItem = props => {
    const {theme, onChange} = props
    
    return (
        <StyledCheckboxItem onChange={onChange} theme={theme}/>
    );
}

export default CheckboxItem;