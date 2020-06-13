// types
export const SET_POSTS_LIST = 'SET_POSTS_LIST'
export const SET_CATS_LIST = 'SET_CATS_LIST'

// actions
export const setPostsList = posts => {
    return {
        type: SET_POSTS_LIST,
        payload: posts
    }
}
export const setCatsList = cats => (
    {
        type: SET_CATS_LIST,
        payload: cats
    }
)