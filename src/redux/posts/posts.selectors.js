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
        posts => {
            if (!posts) return null
            else
                return posts.find(post => post.id === postParam)
        }
    )

export const selectPostsWithSameCat = catId =>
    createSelector(
        [selectPostsList],
        posts => {
            if (!posts) return
            else
                return posts.filter(post => post.cat === catId)
        }
    )

export const selectCat = catId => createSelector(
    selectPostsCatList,
    cats => {
        if (!cats) return
        else
            return cats.find(cat => cat.id === catId)
    }
)

export const selectPostsWithPerson = personId =>
    createSelector(
        selectPostsList,
        posts => {
            if (!posts) return null
            else {
                return posts.filter(post => post.author === personId)
            }
        }
    )