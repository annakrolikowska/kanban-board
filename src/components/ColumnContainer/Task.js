import React from "react";
import { StyledTask } from "../../styles/ColumnContainer/Task.styled";
import { deleteTaskAction } from "../../redux/actions/task.actions";
import { connect } from "react-redux";

import Priority from "./Priority";
import ClosedButton from "./ClosedButton";
import ConfirmationDialog from "./ConfirmationDialog";
import useTaskDeletion from "../../hooks/useTaskDeletion";

const Task = ({
  id,
  title,
  priority,
  size,
  theme,
  description,
  user,
  deleteTask,
}) => {
  const {
    isDeleteDialogOpen,
    taskToDeleteId,
    handleOpenDeleteDialog,
    handleCloseDeleteDialog,
    handleDeleteTask,
  } = useTaskDeletion(deleteTask);

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData("taskId", id);
  };

  return (
    <div draggable onDragStart={(e) => handleDragStart(e, id)}>
      <StyledTask priority={priority} size={size} theme={theme}>
        <div className="task-container">
          <Priority priority={priority} />
          <ClosedButton
            size="small"
            onClick={() => handleOpenDeleteDialog(id)}
          />
        </div>
        <div className="task-details">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="task-member">
          <img src={user.avatar} alt="member" />
          <h2>{user.name}</h2>
        </div>
      </StyledTask>
      <ConfirmationDialog
        message="Are you sure you want to delete this task?"
        isOpen={isDeleteDialogOpen}
        onConfirm={() => handleDeleteTask(taskToDeleteId)}
        onCancel={handleCloseDeleteDialog}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  user: state.userReducer.users.find((user) => user.id === ownProps.user.id),
});

const mapActionToProps = {
  deleteTask: deleteTaskAction,
};

export default connect(mapStateToProps, mapActionToProps)(Task);
