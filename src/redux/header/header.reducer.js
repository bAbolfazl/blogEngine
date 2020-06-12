import { TOGGLE_MOBILE_MENU } from './header.actions'

const INITIAL_STATE = {
    show: false
}

const headerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_MOBILE_MENU:
            return {
                ...state,
                show: !state.show
            }
        default:
            return state
    }
}

export default headerReducer