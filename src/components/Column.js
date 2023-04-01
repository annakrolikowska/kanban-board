
import React from 'react';
import { StyledColumn } from '../styles/Column.styled';
import Task from './Task';

const Column = props => {
    
    return (
        <StyledColumn>
          <h2> In progress</h2>
          <Task/>
          <Task/>
          <Task/>
        </StyledColumn>
    );
}

export default Column;