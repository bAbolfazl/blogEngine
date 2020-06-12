import {combineReducers} from 'redux'

import headerReducer from './header/header.reducer'

const rootReducer = {
    header: headerReducer
}

export default combineReducers(rootReducer)