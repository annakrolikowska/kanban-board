import React from "react";
import { StyledForm } from "../../styles/Form/Form.styled";
import Button from "../Header/Button";
import ClosedButton from "../ColumnContainer/ClosedButton";
import CustomCheckbox from "./CustomCheckbox";
import ConfirmationDialog from "../ColumnContainer/ConfirmationDialog";
import { connect } from "react-redux";
import { addTaskAction } from "../../redux/actions/task.actions";
import useFormValidation from "../../hooks/useFormValidation";

const Form = (props) => {
  const initialState = {
    title: "",
    description: "",
    priority: "",
    userId: "",
    avatar: "",
    theme: "",
    errors: [],
    isConfirmationOpen: false,
  };

  const { formState, setFormState, validateForm } =
    useFormValidation(initialState);
  const {
    title,
    description,
    priority,
    userId,
    theme,
    errors,
    isConfirmationOpen,
  } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      const task = { title, description, priority, theme };
      task.columnId = 1;
      task.userId = parseInt(userId);

      const tasksInColumn = props.tasks.filter((task) => task.columnId === 1);

      if (tasksInColumn.length >= 4) {
        setFormState({
          ...formState,
          isConfirmationOpen: true,
        });
        return;
      }

      props.addTask(task);
      resetForm();
    }
  };

  const handleFieldChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    setFormState({
      ...formState,
      isConfirmationOpen: false,
    });
  };

  const resetForm = () => {
    setFormState({
      title: "",
      description: "",
      priority: "",
      userId: "",
      avatar: "",
      theme: "",
      errors: [],
      isConfirmationOpen: false,
    });
  };

  const { type, onClose } = props;

  const hasTitleError = errors.includes("Title is required");
  const hasDescriptionError = errors.includes(
    "Description maximum 100 characters in length"
  );
  const hasPriorityError = errors.includes("Priority is required");
  const hasMemberError = errors.includes("Member is required");

  return (
    <StyledForm type={type} action="" onSubmit={handleSubmit}>
      <ClosedButton size="large" onClick={onClose} />
      <div>
        <label>
          Project title
          {hasTitleError && (
            <span className="error-message">Title is required</span>
          )}
          <input
            name="title"
            type="text"
            onChange={handleFieldChange}
            value={title}
            placeholder="Enter project title"
            className={hasTitleError ? "input error" : "input"}
          />
        </label>
        <label>
          Member
          {hasMemberError && (
            <span className="error-message">Member is required</span>
          )}
          <select
            name="userId"
            onChange={handleFieldChange}
            value={userId}
            type="form"
            className={hasMemberError ? "error" : ""}
          >
            <option value="">Select team member</option>
            {props.users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Description
          {hasDescriptionError && (
            <span className="error-message">
              Description maximum 100 characters in length
            </span>
          )}
          <textarea
            name="description"
            onChange={handleFieldChange}
            value={description}
            placeholder="Enter project description"
            className={hasDescriptionError ? "error" : ""}
          ></textarea>
        </label>
      </div>
      <label>
        Task priority
        {hasPriorityError && (
          <span className="error-message">Priority is required</span>
        )}
        <select
          name="priority"
          onChange={handleFieldChange}
          value={priority}
          type="form"
          className={hasPriorityError ? "error" : ""}
        >
          <option value=""> Select task priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <CustomCheckbox
        onChange={handleFieldChange}
        theme={theme}
        value={theme}
      />
      <Button type="submit">Add to board</Button>
      {isConfirmationOpen && (
        <ConfirmationDialog
          type="limit-info"
          onCancel={handleCancel}
          isOpen={isConfirmationOpen}
          message={`Cannot add new task to first column. Limit of 4 tasks has been reached.`}
        />
      )}
    </StyledForm>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.taskReducer.tasks,
    users: state.userReducer.users,
  };
};

const mapDispatchToProps = {
  addTask: addTaskAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
