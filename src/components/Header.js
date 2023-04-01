
import React from 'react';
import { StyledHeader } from '../styles/Header.styled';
import Button from './Button';
import Select from './Select';

const Header = props => {
    
    return (
        <StyledHeader>
            <h1>Kanban <span>Board</span></h1>
            <div>
                <Select/>
                <Select/>
                <Button/>
            </div>
        </StyledHeader>
    );
}

export default Header;