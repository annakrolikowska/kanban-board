import React from 'react';
import { StyledForm } from '../styles/Form.styled';
import Button from './Button';
import ClosedButton from './ClosedButton';
import { connect } from 'react-redux';
import { addTaskAction } from '../actions/kanban';

class Form extends React.Component {
    
    state = {
        title: '',
        description: '',
        priority: '',
        member: '',
        // errors: [],
    }
render() {

    const {type, onClose} = this.props

    return (
        <StyledForm type={type} action="" onSubmit={this.handleSubmit}>
            <ClosedButton size='large' onClick={onClose}/>
            <div>
                <label> Project title
                    <input name="title" type='text' onChange={ this.handleFieldChange } value={this.state.title} ></input>
                </label>
                <label> Member
                    <select name="member" type='text' onChange={ this.handleFieldChange } value={this.state.member}>
                        <option value="" className='placeholder'> Select team member</option>
                        <option value="Ksenia Storm">Ksenia Storm</option>
                        <option value="Pawel Waters">Pablo Waters</option>
                        <option value="Annie Bunny">Annie Bunny</option>
                        <option value="Ewa Flowers">Ewa Flowers</option>
                        <option value="John Snow">John Snow</option>
                        <option value="Justine Rivers">Justine Rivers</option>
                    </select>
                </label>
                <label> Description
                    <textarea name="description" onChange={ this.handleFieldChange } value={this.state.description}></textarea>
                </label>    
            </div>

            <label> Task priority
                <select name='priority' onChange={ this.handleFieldChange } value={this.state.priority}>
                    <option value=""> Select task priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </label>
            <Button type='submit'>Add to board</Button>
        </StyledForm>
        );
    }

    handleSubmit = e => {
        e.preventDefault();

        const { title, description, priority, member } = this.state;
        const task = { title, description, priority, member };
        task.columnId=1;
        this.props.addTask(task)
    }

    handleFieldChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        
    }
  }

  const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch(addTaskAction(task)),
  });


  export default connect(mapStateToProps, mapDispatchToProps)(Form)
