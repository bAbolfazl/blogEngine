import {combineReducers} from 'redux'

import headerReducer from './header/header.reducer'
import postsReducer from './posts/posts.reducer'
import usersReducr from './users/users.reducer'

const rootReducer = {
    header: headerReducer,
    posts: postsReducer,
    users: usersReducr,
}

export default combineReducers(rootReducer)