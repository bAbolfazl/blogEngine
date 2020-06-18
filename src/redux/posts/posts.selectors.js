import { createSelector } from 'reselect'

const selectPosts = state => state.posts

export const selectPostsList = createSelector(
    [selectPosts],
    post => post.postsList
)

export const selectPostsCatList = createSelector(
    [selectPosts],
    post => post.categoryList
)

export const selectPost = postParam =>
    createSelector(
        [selectPostsList],
        posts => posts.find(post => post.id === postParam)
    )

export const selectPostsWithSameCat = catId =>
    createSelector(
        [selectPostsList],
        posts => posts.filter(post => post.cat === catId)
    )

export const selectCat = catId => {
    createSelector(
        [selectPostsCatList],
        cats => cats.find(cat => cat.id === catId)
    )
}