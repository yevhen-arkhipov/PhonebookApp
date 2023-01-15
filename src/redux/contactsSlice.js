import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import {
  fetchContactsFulfilledReducer,
  addContactFulfilledReducer,
  deleteContactFulfilledReducer,
  anyPendingReducer,
  anyRejectedReducer,
  anyFulfilledReducer,
} from 'redux/contactsSliceReducers';

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
      .addMatcher(getActions('pending'), anyPendingReducer)
      .addMatcher(getActions('rejected'), anyRejectedReducer)
      .addMatcher(getActions('fulfilled'), anyFulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
