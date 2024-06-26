import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
    },
    deleteContact: {
      reducer(state, { payload }) {
        state.contacts = state.contacts.filter((con) => con.id !== payload);
      },
    },
  },
});
export const selectContacts = (state) => state.contacts;

export const contactsReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
