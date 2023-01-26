import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';

import { fetchContacts, addContact, deleteContact } from './operations';
import {
  fetchContactsFulfilledReducer,
  addContactFulfilledReducer,
  deleteContactFulfilledReducer,
  logOutFulfilledReducer,
  anyPendingReducer,
  anyRejectedReducer,
  anyFulfilledReducer,
} from './contactsSliceReducers';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(logOut.fulfilled, logOutFulfilledReducer)
      .addMatcher(getActions('pending'), anyPendingReducer)
      .addMatcher(getActions('rejected'), anyRejectedReducer)
      .addMatcher(getActions('fulfilled'), anyFulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
