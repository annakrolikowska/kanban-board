import { loadUsers, initializeUsers } from "../api/UserApi";

const initialState = {
  users: initializeUsers(),
};

const userReducer = (state = initialState, action) => {
  const getUsers = () => {
    try {
      return loadUsers();
    } catch (error) {
      console.error("Error loading users:", error);
      return state.users;
    }
  };

  switch (action.type) {
    case "loadUsers":
      return {
        users: getUsers(),
      };
    default:
      return state;
  }
};

export default userReducer;
