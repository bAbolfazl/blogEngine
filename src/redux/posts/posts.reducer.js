import { SET_POSTS_LIST, SET_CATS_LIST } from './posts.actions'

const INITIAL_STATE = {
    postsList: '',
    categoryList: ''
}

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_POSTS_LIST:
            return {
                ...state,
                postsList: action.payload
            }
        case SET_CATS_LIST:
            return {
                ...state,
                categoryList: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default postsReducer