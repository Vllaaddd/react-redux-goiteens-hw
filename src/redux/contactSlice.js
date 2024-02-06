import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: 0, name: 'Vlad', number: "+380376864264" },
]

const contactSlice = createSlice({
    name: 'slice',
    initialState: initialState,
    reducers: {
      addContact(state, action){
        state.push(action.payload)
        console.log(action.payload);
      },
      deleteContact(state, action){
        return state.filter((phone) => phone.id !== action.payload)
      }
    },
})

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions