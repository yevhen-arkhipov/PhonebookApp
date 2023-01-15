export const fetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

export const addContactFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

export const deleteContactFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

export const anyPendingReducer = state => {
  state.isLoading = true;
};

export const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};
