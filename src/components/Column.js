
import React from 'react';
import { StyledColumn } from '../styles/Column.styled';
import Task from './Task';
import { connect } from 'react-redux';
import { moveTaskAction } from '../actions/kanban';


class Column extends React.Component {   

  render() {

    const {columnTitle, limit, id} = this.props

    const handleDrop = (event) => {
      event.preventDefault()
      const taskId = event.dataTransfer.getData("taskId");
      const columndId=id;
      this.props.moveTask(Number(taskId),columndId)
    }

    return (
      
      <StyledColumn  onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
        <header>
          <h2>{columnTitle}</h2>
          <p>Tasks limit: {limit}</p>
        </header>
        {this.props.tasks.filter(task => task.columnId === id).map(task => 
          <Task id={task.id} title={task.title} description={task.description} member={task.member} priority={task.priority}/> )}
      </StyledColumn>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  }
}

const mapDispatchToProps = dispatch => ({
  moveTask: (taskId,columndId) => dispatch(moveTaskAction(taskId,columndId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column)