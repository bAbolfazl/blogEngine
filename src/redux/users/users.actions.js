// types
export const SET_USERS_LIST = 'SET_USERS_LIST'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'

// actins
export const setUsersList = usersList => {
    // debugger;
    return {
        type: SET_USERS_LIST,
        payload: usersList
    }
}

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}