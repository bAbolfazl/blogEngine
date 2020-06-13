import { SET_USERS_LIST } from './users.actions'

const INITIAL_STATE = {
    usersList: '',
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
            default:
            return {
                ...state
            }
    }
}

export default usersReducer