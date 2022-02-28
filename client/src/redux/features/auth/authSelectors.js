import { createSelector } from '@reduxjs/toolkit';

export const selectUser = (state) => state.auth;

export const selectCurrentUser = createSelector([selectUser], (auth) => auth.currentUser);
export const selectAuthLoadingState = createSelector([selectUser], (auth) => auth.isLoading);
export const selectIsUserAuth = createSelector([selectUser], (auth) => auth.isAuth);
export const selectAuthError = createSelector([selectUser], (auth) => auth.authError);
