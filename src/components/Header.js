
import React from 'react';
import { StyledHeader } from '../styles/Header.styled';
import Button from './Button';
import Select from './Select';
import Form from './Form';

class Header extends React.Component { 
    state = {
        isFormVisible: false,
    }

    render() {
        const { isFormVisible } = this.state;
        return (
            <StyledHeader>
                <h1>Kanban <span>Board</span></h1>
                <div className="header-container">
                    <Select>   
                        <option value="" > Member</option>
                        <option value="Ksenia Storm">Ksenia Storm</option>
                        <option value="Pawel Waters">Pablo Waters</option>
                        <option value="Annie Bunny">Annie Bunny</option>
                        <option value="Ewa Flowers">Ewa Flowers</option>
                        <option value="John Snow">John Snow</option>
                        <option value="Justine Rivers">Justine Rivers</option>
                    </Select>
                    <Select>
                        <option value="">Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </Select>
                    <Button onClick={this.toggleFormVisibility}>
                      {isFormVisible ? 'Close form' : '+ Add task'}
                    </Button>
                </div>
                {isFormVisible && <Form onClose={this.toggleFormVisibility} />}
            </StyledHeader>
        );
    }

    toggleFormVisibility = () => {
        this.setState(prevState => ({
            isFormVisible: !prevState.isFormVisible,
        }));
    }
}

export default Header;