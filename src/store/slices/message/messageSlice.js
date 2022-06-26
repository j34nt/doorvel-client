import { createSlice } from '@reduxjs/toolkit'


export const messageSlice = createSlice({
  name: 'parent',
  initialState: {
    name:null,
    email:null,
    message:null,
  },
  reducers: {
    sendMessage:(state, action) => {

    },
    clearForm:(state) => {

    }
  }
})

export const { sendMessage, clearForm } = messageSlice.actions