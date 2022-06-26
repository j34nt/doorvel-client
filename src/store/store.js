import { configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from './slices/categories';
import { childsSlice } from './slices/childs';
import { messageSlice } from './slices/message';
import { parentSlice } from "./slices/parents";

export const store = configureStore({
  reducer: {
    parents: parentSlice.reducer,
    childs: childsSlice.reducer,
    categories: categoriesSlice.reducer,
    message: messageSlice.reducer,
  },
})