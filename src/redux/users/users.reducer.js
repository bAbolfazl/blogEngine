import { SET_USERS_LIST, SET_CURRENT_USER } from './users.actions'

const INITIAL_STATE = {
    usersList: '',
    currentUser: ''
}
// debugger

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USERS_LIST:
            {
                return {
                    ...state,
                    usersList: action.payload
                }

            }
            case SET_CURRENT_USER: {
                return {
                    ...state,
                    currentUser: action.payload
                }
            }
            default:
            return {
                ...state
            }
    }
}

export default usersReducer