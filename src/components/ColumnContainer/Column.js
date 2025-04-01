import React from "react";
import { StyledColumn } from "../../styles/ColumnContainer/Column.styled";
import Task from "./Task";
import { connect } from "react-redux";
import { moveTaskAction } from "../../redux/actions/task.actions";
import ConfirmationDialog from "./ConfirmationDialog";
import useFilteredTasks from "../../hooks/useFilteredTasks";
import useTaskDrop from "../../hooks/useTaskDrop";

const findUser = (users, userId) => {
  return users.find((user) => user.id === userId);
};

const Column = ({
  id,
  columnTitle,
  limit,
  tasks,
  users,
  filters,
  moveTask,
}) => {
  const { isConfirmationOpen, handleDrop, handleCancel } = useTaskDrop(
    moveTask,
    tasks,
    id,
    limit
  );

  const filteredTasks = useFilteredTasks(tasks, id, filters);

  return (
    <StyledColumn onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      <header>
        <h2>{columnTitle}</h2>
        <p>Tasks limit: {limit}</p>
      </header>
      {filteredTasks.map((task) => {
        const user = findUser(users, task.userId);
        return <Task key={task.id} {...task} user={user} />;
      })}
      {isConfirmationOpen && (
        <ConfirmationDialog
          type="limit-info"
          onCancel={handleCancel}
          isOpen={isConfirmationOpen}
          message={`Cannot move task to column ${id}. Limit of ${limit} tasks has been reached.`}
        />
      )}
    </StyledColumn>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.taskReducer.tasks,
  users: state.userReducer.users,
  filters: state.filterReducer.filters,
});

const mapDispatchToProps = {
  moveTask: moveTaskAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Column);
