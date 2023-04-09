import React from 'react';
import { StyledColumn } from '../styles/Column.styled';
import Task from './Task';
import { connect } from 'react-redux';
import { moveTaskAction } from '../actions/kanban';
import ConfirmationDialog from './ConfirmationDialog';

class Column extends React.Component {
  state = {
    isConfirmationOpen: false,
    taskIdToMove: null,
  };

  handleDrop = (event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('taskId');
    const columnId = this.props.id;
    const tasksInColumn = this.props.tasks.filter(
      (task) => task.columnId === columnId
    );

    if (tasksInColumn.length >= this.props.limit) {
      this.setState({
        isConfirmationOpen: true,
        taskIdToMove: taskId,
      });
      return;
    }

    this.props.moveTask(Number(taskId), columnId);
  };

  handleCancel = () => {
    this.setState({
      isConfirmationOpen: false,
    });
  };

  render() {
    const { columnTitle, limit} = this.props;
    const { isConfirmationOpen } = this.state;

    return (
      <StyledColumn onDrop={this.handleDrop} onDragOver={(event) => event.preventDefault()}>
        <header>
          <h2>{columnTitle}</h2>
          <p>Tasks limit: {limit}</p>
        </header>
        {this.props.tasks
          .filter((task) => task.columnId === this.props.id)
          .map((task) => (
            <Task id={task.id} title={task.title} description={task.description} member={task.member} avatar={task.avatar} priority={task.priority} theme={task.theme}/>
          ))}
        {isConfirmationOpen && (
          <ConfirmationDialog type="limit-info" onCancel={this.handleCancel} isOpen={isConfirmationOpen}
            message={`Cannot move task to column ${this.props.id}. Limit of ${limit} tasks has been reached.`}
          />
        )}
      </StyledColumn>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => ({
  moveTask: (taskId, columnId) =>
    dispatch(moveTaskAction(taskId, columnId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);