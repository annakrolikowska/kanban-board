import React, { useState } from "react";
import { StyledHeader } from "../../styles/Header/Header.styled";
import { connect } from "react-redux";
import Button from "./Button";
import Select from "./Select";
import Form from "../Form/Form";
import {
  setPriorityFilterAction,
  setUserFilterAction,
} from "../../redux/actions/filter.actions";

const Header = ({ users, setPriorityFilter, setUserFilter }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handlePriorityChange = (e) => {
    e.preventDefault();
    setPriorityFilter(e.target.value);
  };

  const handleUserChange = (e) => {
    e.preventDefault();
    setUserFilter(e.target.value ? parseInt(e.target.value) : "");
  };

  return (
    <StyledHeader>
      <h1>
        Kanban <span>Board</span>
      </h1>
      <div className="header-container">
        <Select onChange={handleUserChange}>
          <option value=""> Member</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </Select>
        <Select onChange={handlePriorityChange}>
          <option value="">Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
        <Button type="openForm" onClick={toggleFormVisibility}>
          {isFormVisible ? "Close form" : "+ Add task"}
        </Button>
      </div>
      {isFormVisible && <Form onClose={toggleFormVisibility} />}
    </StyledHeader>
  );
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = {
  setPriorityFilter: setPriorityFilterAction,
  setUserFilter: setUserFilterAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
