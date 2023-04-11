import React from 'react';
import { StyledForm } from '../styles/Form.styled';
import Button from './Button';
import ClosedButton from './ClosedButton';
import CustomCheckbox from './CustomCheckbox';
import ConfirmationDialog from './ConfirmationDialog';
import { connect } from 'react-redux';
import { addTaskAction } from '../redux/actions/task.actions';

class Form extends React.Component {
    
    state = {
        title: '',
        description: '',
        priority: '',
        userID: '',
        avatar: '',
        theme: '',
        errors: [],
        isConfirmationOpen: false,
    }

    render() {
        const { type, onClose } = this.props;
        const { title, description, priority, theme, errors, isConfirmationOpen } = this.state;
    
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
                <input name="title" type="text" onChange={this.handleFieldChange} value={title} placeholder="Enter project title" className={hasTitleError ? 'input error' : 'input'}/>
            </label>
            <label>
                Member
                {hasMemberError && <span className="error-message">Member is required</span>}
                <select name="userId" onChange={this.handleFieldChange} className={hasMemberError ? 'error' : ''}>
                    <option value="">
                        Select team member
                    </option>
                    {this.props.users.map((user) => (
                        <option key={user.userId} value={user.id}>
                            {user.name}
                        </option>
                     ))} 
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
        <CustomCheckbox onChange={this.handleFieldChange} theme={theme} value={theme}/>
        <Button type="submit">Add to board</Button>
        {isConfirmationOpen && (
          <ConfirmationDialog type="limit-info" onCancel={this.handleCancel} isOpen={isConfirmationOpen}
            message={`Cannot add new task to first column. Limit of 4 tasks has been reached.`}
          />
        )}
      </StyledForm>
    );
  }

    handleSubmit = e => {
        e.preventDefault();
      
        const isFormValid = this.validateForm();
      
        if (isFormValid) {
            const { title, description, priority, userId, theme } = this.state;

            const task = { title, description, priority, theme};
            task.columnId = 1;
            task.userId = parseInt(userId);
           
            const tasksInColumn = this.props.tasks.filter(
                (task) => task.columnId === 1
              );
          
              if (tasksInColumn.length >= 4) {
                this.setState({
                    isConfirmationOpen: true,   
                });
                return;
              }
            this.props.addTask(task);
        }
    }

    handleFieldChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    
    handleCancel = () => {
        this.setState({
          isConfirmationOpen: false,
        });
      };

    validateForm = () => {
        const { title, description, priority, userId } = this.state;
        const errors = [];
    
        if (title.trim() === '') {
            errors.push('Title is required');
        }
        if (description.trim().length > 100) {
            errors.push('Description maximum 100 characters in length');
        }
        if (priority.trim() === '') {
            errors.push('Priority is required');
        }
        if (userId.trim() === '') {
            errors.push('Member is required');
        }
    
        this.setState({ errors });
    
        return errors.length === 0;
    };

}

const mapStateToProps = (state) => {
    return {
        tasks: state.taskReducer.tasks,
        users: state.userReducer.users
    }
  }

  const mapDispatchToProps = dispatch => ({
    addTask: task => dispatch(addTaskAction(task)),
  });


  export default connect(mapStateToProps, mapDispatchToProps)(Form)
 