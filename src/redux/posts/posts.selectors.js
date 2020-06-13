import { createSelector } from 'reselect'

export const selectPosts = state => state.posts

export const selectPostsList = createSelector(
    [selectPosts],
    post => post.postsList
)

export const selectPostsCatList = createSelector(
    [selectPosts],
    post => post.categoryList
)