import { createSelector } from '@reduxjs/toolkit';

export const selectUser = (state) => state.auth;

export const selectCurrentUser = createSelector([selectUser], (auth) => auth.currentUser);
export const selectLoadingState = createSelector([selectUser], (auth) => auth.isFetching);
export const selectAuthError = createSelector([selectUser], (auth) => auth.authError);
