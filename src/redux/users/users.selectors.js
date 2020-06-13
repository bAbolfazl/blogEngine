import {createSelector} from 'reselect'

const selectUsers = state => state.users

export const selectUsersList = createSelector(
    [selectUsers],
    users => users.usersList
)