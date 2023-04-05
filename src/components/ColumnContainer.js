
import React from 'react';
import { StyledColumnContainer } from '../styles/ColumContainer.styled';
import Column from './Column';

const ColumnContainer = props => {

    const columns = ([
        { id: 1, title: 'to do', limit: 4},
        { id: 2, title: 'in progress', limit: 3},
        { id: 3, title: 'in review', limit: 2},
        { id: 4, title: 'completed', limit: 4}
  ])

  const generateColumns = (column) => {
    return columns.map(column => <Column key={column.id} id={column.id} columnTitle={column.title} limit={column.limit}/>)
  }
    
    return (
        <StyledColumnContainer>
        {generateColumns()}
        </StyledColumnContainer>
    );
}

export default ColumnContainer;