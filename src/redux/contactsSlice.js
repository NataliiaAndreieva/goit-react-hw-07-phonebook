import { createSlice } from '@reduxjs/toolkit';
import { deleteContactById, addContacts, getContacts } from './contacts-api';

const contactsInitState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(getContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.push(payload);
      })
      .addCase(addContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContactById.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
      })
    .addCase(deleteContactById.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    
  },

});
  
  
export const contactsReducer = contactsSlice.reducer;
