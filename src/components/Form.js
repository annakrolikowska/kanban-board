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
        errors: [],
    }

    render() {
        const { type, onClose } = this.props;
        const { title, description, priority, member, errors } = this.state;
    
        const hasTitleError = errors.includes('Title is required');
        const hasDescriptionError = errors.includes('Description maximum 100 characters in length');
        const hasPriorityError = errors.includes('Priority is required');
        const hasMemberError = errors.includes('Member is required');
    
    return (
        <StyledForm type={type} action="" onSubmit={this.handleSubmit}>
        <ClosedButton size="large" onClick={onClose} />
        <div>
            <label>
                Project title
                {hasTitleError && <span className="error-message">Title is required</span>}
                <input name="title" type="text" onChange={this.handleFieldChange} value={title} placeholder="Enter project title" className={hasTitleError ? 'error' : ''}/>
            </label>
            <label>
                Member
                {hasMemberError && <span className="error-message">Member is required</span>}
                <select name="member" onChange={this.handleFieldChange} value={member} className={hasMemberError ? 'error' : ''}>
                    <option value="">
                        Select team member
                    </option>
                    <option value="Ksenia Storm">Ksenia Storm</option>
                    <option value="Pawel Waters">Pablo Waters</option>
                    <option value="Annie Bunny">Annie Bunny</option>
                    <option value="Ewa Flowers">Ewa Flowers</option>
                    <option value="John Snow">John Snow</option>
                    <option value="Justine Rivers">Justine Rivers</option>
                </select>
            </label>
            <label>
                Description
                {hasDescriptionError && <span className="error-message">Description maximum 100 characters in length</span>}
                <textarea name="description" onChange={this.handleFieldChange} value={description} placeholder="Enter project description" className={hasDescriptionError ? 'error' : ''}></textarea>
            </label>
        </div>
        <label>
            Task priority
            {hasPriorityError && <span className="error-message">Priority is required</span>}
            <select name="priority" onChange={this.handleFieldChange} value={priority} className={hasPriorityError ? 'error' : ''}>
                <option value=""> Select task priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        </label>
        <Button type="submit">Add to board</Button>
      </StyledForm>
    );
  }

    handleSubmit = e => {
        e.preventDefault();

        const isFormValid = this.validateForm();

        if (isFormValid) {

        const { title, description, priority, member } = this.state;
        const task = { title, description, priority, member };
        task.columnId=1;
        this.props.addTask(task)
        }
    }

    handleFieldChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    validateForm = () => {
        const { title, description, priority, member } = this.state;
        const errors = [];
    
        if (title.trim() === '') {
        errors.push('Title is required');
        }
        if (description.trim() === '') {
            errors.push('Title is required');
        }
        if (description.trim().length > 100) {
        errors.push('Description maximum 100 characters in length');
        }
        if (priority.trim() === '') {
        errors.push('Priority is required');
        }
        if (member.trim() === '') {
        errors.push('Member is required');
        }
    
        this.setState({ errors });
    
        return errors.length === 0;
  };

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
