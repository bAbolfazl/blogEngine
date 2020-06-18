import { createSelector } from 'reselect'
// import { setUsersList } from './users.actions'

const selectUsers = state => state.users

export const selectUsersList = createSelector(
    [selectUsers],
    users => users.usersList
)

// export const selectUser = userId =>
//     createSelector(
//         [setUsersList],
//         usersList => usersList.find(user => user.id = userId)
//     )