import { createSelector } from 'reselect'

const selectUsers = state => state.users

export const selectUsersList = createSelector(
    [selectUsers],
    users => users.usersList
)

export const selectUserWithId = userId =>
    createSelector(
        [selectUsersList],
        usersList => {
            if (!usersList) return null
            else
                return usersList.find(user => {
                    console.log(user.id)
                    console.log(userId)
                    return user.id === userId
                })
        }
    )