// types
export const SET_USERS_LIST = 'SET_USERS_LIST'

// actins
export const setUsersList = usersList => {
    // debugger;
    return {
        type: SET_USERS_LIST,
        payload: usersList
    }
}