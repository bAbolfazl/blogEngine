import {createSelector} from 'reselect'

const selectHeader = state => state.header

export const selectHeaderShow = createSelector(
    [selectHeader],
    header => header.show
)