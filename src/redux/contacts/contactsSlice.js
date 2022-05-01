import { createSlice, combineReducers } from "@reduxjs/toolkit";
import initialContacts from "../../data/contacts.json";

const contactsItemsSlice = createSlice({
  name: "items",
  initialState:
    JSON.parse(localStorage.getItem("contacts")) || initialContacts || [],
  reducers: {
    handleAddContact: (state, action) => [...state, action.payload],
    handleRemoveContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

const contactsFilterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterContact: (_, action) => action.payload,
  },
});
// console.log("contactsItemsSlice", contactsItemsSlice);
export const { handleAddContact, handleRemoveContact } =
  contactsItemsSlice.actions;
export const { filterContact } = contactsFilterSlice.actions;

const contactsReducer = combineReducers({
  [contactsItemsSlice.name]: contactsItemsSlice.reducer,
  [contactsFilterSlice.name]: contactsFilterSlice.reducer,
});
export default contactsReducer;

// REDUX Toolkit CreateReducers
// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";
// import {
//   handleAddContact,
//   handleRemoveContact,
//   filterContact,
// } from "./contactsActions";
// import initialContacts from "../../data/contacts.json";

// const contactsItemsReducer = createReducer(
//   JSON.parse(localStorage.getItem("contacts")) || initialContacts || [],
//   builder =>
//     builder
//       .addCase(handleAddContact, (state, action) => [...state, action.payload])
//       .addCase(handleRemoveContact, (state, action) => {
//         state.filter(contact => contact.id !== action.payload);
//       }),
// );

// const contactsFilterReducer = createReducer("", builder =>
//   builder.addCase(filterContact, (_, action) => action.payload),
// );

// const contactsReducer = combineReducers({
//   items: contactsItemsReducer,
//   filter: contactsFilterReducer,
// });
// export default contactsReducer;

// --------Usage with the Map Object Notation---------
// {
//     [handleAddContact]: (state, action) => [...state, action.payload],
//     [handleRemoveContact]: (state, action) =>
//       state.filter(contact => contact.id !== action.payload),
//   },
// );

// -------REDUX----------------
// import { combineReducers } from "redux";
// import { ADDCONTACT, DELETECONTACT, FILTERCONTACT } from "./contactsTypes";
// import initialContacts from "../../data/contacts.json";

// const contactsItemsReducer = (
//   // eslint-disable-next-line default-param-last
//   state = JSON.parse(localStorage.getItem("contacts")) || initialContacts || [],
//   action,
// ) => {
//   switch (action.type) {
//     case ADDCONTACT:
//       return [...state, action.payload];
//     case DELETECONTACT:
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };
// // eslint-disable-next-line default-param-last
// const contactsFilterReducer = (state = "", action) => {
//   switch (action.type) {
//     case FILTERCONTACT:
//       return action.payload;
//     default:
//       return state;
//   }
// };
// const contactsReducer = combineReducers({
//   items: contactsItemsReducer,
//   filter: contactsFilterReducer,
// });
// export default contactsReducer;
