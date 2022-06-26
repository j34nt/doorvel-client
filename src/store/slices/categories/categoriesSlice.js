import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories:[],
    category:null
    // isLoadingChilds:false
  },
  reducers: {
    

    setCategories:(state,action) => {
        state.categories = action.payload.categories
    },

    setCategory:(state,action) => {
        state.category = action.payload
    }

   
  }
});

export const { setCategories, setCategory } = categoriesSlice.actions