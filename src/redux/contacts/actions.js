// import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("contacts/fetchContactRequest");
export const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
export const fetchContactError = createAction("contacts/fetchContactError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

// const addContact = createAction("contacts/add", (name, number) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

// const deleteContact = createAction("contacts/delete");

export const filterContacts = createAction("contacts/filterContacts");

//redux

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = (id) => ({
//   type: types.DELETE,
//   payload: id,
// });

// const filterContacts = (value) => ({
//   type: types.FILTER,
//   payload: value,
// });
