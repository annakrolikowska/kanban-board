import React from 'react';
import { StyledHeader } from '../styles/Header.styled';
import { connect } from 'react-redux'
import Button from './Button';
import Select from './Select';
import Form from './Form';
import {setPriorityFilterAction} from "../redux/actions/filter.actions"
import {setUserFilterAction} from "../redux/actions/filter.actions"

class Header extends React.Component { 
    state = {
        isFormVisible: false,
        userFilter: '',
        priorityFilter: '',
    }

    render() {

        const { isFormVisible, userFilter, priorityFilter } = this.state;
        return (
            <StyledHeader>
                <h1>Kanban <span>Board</span></h1>
                <div className="header-container">
                    <Select value={userFilter} onChange={this.handleUserChange}>   
                        <option value="" > Member</option>
                        {/* <option value="Ksenia Storm">Ksenia Storm</option>
                        <option value="Pawel Waters">Pawel Waters</option>
                        <option value="Annie Bunny">Annie Bunny</option>
                        <option value="Ewa Flowers">Ewa Flowers</option>
                        <option value="John Snow">John Snow</option>
                        <option value="Justine Rivers">Justine Rivers</option> */}
                        {this.props.users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                     ))} 
                    </Select>
                    <Select value={priorityFilter} onChange={this.handlePriorityChange}>
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

    handleUserChange = e => {
        e.preventDefault();
        console.log(e.target.value)
        if (e.target.value !== "") {
            this.props.setUserFilter.parseInt(e.target.value)
        }
    }
}


const mapStateToProps = (state) => {
    return {
      users: state.userReducer.users,
    };
  };

const mapDispatchToProps = (dispatch) => ({
    setPriorityFilter: (priority) =>
        dispatch(setPriorityFilterAction(priority)),
    setUserFilter: (user) =>
        dispatch(setUserFilterAction(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);