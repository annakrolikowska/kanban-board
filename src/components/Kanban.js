
import React from 'react';
import { StyledKanban } from '../styles/Kanban.styled';
import Header from './Header/Header';
import ColumnContainer from './ColumnContainer';


const Kanban = props => {
    
    return (
        <StyledKanban>
            <Header/>
            <ColumnContainer/>
        </StyledKanban>
    );
}

export default Kanban;