export const registerFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const logInFulfilledReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const logOutFulfilledReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const refreshUserFulfilledReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const refreshUserPendingReducer = state => {
  state.isRefreshing = true;
};

export const refreshUserRejectedReducer = state => {
  state.isRefreshing = false;
};
