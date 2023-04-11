import {loadUsers,initializeUsers} from '../api/UserApi'


const initialState = {
    users: initializeUsers(),
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'loadUsers':
            return {
                users: loadUsers()
            }
        default:
            return state;
    }
}

export default userReducer