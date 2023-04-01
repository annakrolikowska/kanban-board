
import React from 'react';
import { StyledColumnContainer } from '../styles/ColumContainer.styled';
import Column from './Column';

const ColumnContainer = props => {
    
    return (
        <StyledColumnContainer>
         <Column/>
         <Column/>
         <Column/>
         <Column/>
        </StyledColumnContainer>
    );
}

export default ColumnContainer;