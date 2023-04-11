import teamMembers from "../initState/users";

const USER_KEY = 'users'

export const initializeUsers = () => {
    const defaultUsers = teamMembers

    if (!localStorage.getItem(USER_KEY)) {
        localStorage.setItem(USER_KEY, JSON.stringify(defaultUsers));
    }

    return loadUsers()
};

export const loadUsers=()=> {
    try {
        const serializedUsers = localStorage.getItem(USER_KEY);
        if (serializedUsers === null) {
            return [];
        }
        return JSON.parse(serializedUsers);
    } catch (error) {
        console.error('Error loading users from localStorage:', error);
        return [];
    }
}
