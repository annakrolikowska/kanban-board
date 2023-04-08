import React, { Component } from 'react';
import { StyledTask } from '../styles/Task.styled';
import { deleteTaskAction } from '../actions/kanban';
import { connect } from 'react-redux';

import Priority from './Priority';
import ClosedButton from './ClosedButton';
import ConfirmationDialog from './ConfirmationDialog';

class Task extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDeleteDialogOpen: false,
            taskToDeleteId: null,
        };
    }

    handleDragStart = (event,id) => {
        event.dataTransfer.setData("taskId", id);
    }


    handleDeleteTask = (id) => {
        this.props.deleteTask(id);
        this.setState({
            isDeleteDialogOpen: false,
            taskToDeleteId: null,
        });
    }

    handleOpenDeleteDialog = (id) => {
        this.setState({
            isDeleteDialogOpen: true,
            taskToDeleteId: id,
        });
    }

    handleCloseDeleteDialog = () => {
        this.setState({
            isDeleteDialogOpen: false,
            taskToDeleteId: null,
        });
    }

    render() {
        const { id, title, priority, member, avatar, size, theme, description, onChange} = this.props;

        return (
            <div draggable onDragStart={e => this.handleDragStart(e, id)}>
                <StyledTask priority={priority} size={size} theme={theme} onChange={onChange}>
                    <div className="task-container">
                        <Priority priority={priority} />
                        <ClosedButton size='small' onClick={() => this.handleOpenDeleteDialog(id)}  />
                    </div>
                    <div className="task-details">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="task-member">
                        <img src={avatar} alt="member" />
                        <h2>{member}</h2>
                    </div>
                </StyledTask>
                <ConfirmationDialog 
                    message='Are you sure you want to delete this task?' 
                    isOpen={this.state.isDeleteDialogOpen} onConfirm={() => this.handleDeleteTask(this.state.taskToDeleteId)} onCancel={this.handleCloseDeleteDialog}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,  
    }
}

const mapActionToProps = {
    deleteTask: deleteTaskAction,
 }

 export default connect(mapStateToProps, mapActionToProps)(Task)