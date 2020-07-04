import { createSelector } from 'reselect'

const selectUsers = state => state.users

export const selectUsersList = createSelector(
    [selectUsers],
    users => users.usersList
)

export const selectCurrentUser = createSelector(
    [selectUsers],
    users => users.currentUser
)

export const selectUserWithId = userId =>
    createSelector(
        [selectUsersList],
        usersList => {
            if (!usersList) return null
            else
                return usersList.find(user => user.id === userId)
        }
    )