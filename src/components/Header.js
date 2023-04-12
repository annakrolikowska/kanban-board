
import React from 'react';
import { StyledHeader } from '../styles/Header.styled';
import { connect } from 'react-redux'
import Button from './Button';
import Select from './Select';
import Form from './Form';
import {setPriorityFilterAction} from "../redux/actions/filter.actions"

class Header extends React.Component { 
    state = {
        isFormVisible: false,
        filterValue: '',
    }

    render() {

        const { isFormVisible } = this.state;
        return (
            <StyledHeader>
                <h1>Kanban <span>Board</span></h1>
                <div className="header-container">
                    <Select >   
                        <option value="" > Member</option>
                        <option value="Ksenia Storm">Ksenia Storm</option>
                        <option value="Pawel Waters">Pablo Waters</option>
                        <option value="Annie Bunny">Annie Bunny</option>
                        <option value="Ewa Flowers">Ewa Flowers</option>
                        <option value="John Snow">John Snow</option>
                        <option value="Justine Rivers">Justine Rivers</option>
                    </Select>
                    <Select onChange={this.handlePriorityChange}>
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

    handlePriorityChange = e => {
        e.preventDefault();
        console.log(e.target.value)
        this.props.setPriorityFilter(e.target.value)

    }
}


const mapStateToProps = (state) => {
  
}

const mapDispatchToProps = (dispatch) => ({
    setPriorityFilter: (priority) =>
        dispatch(setPriorityFilterAction(priority)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);