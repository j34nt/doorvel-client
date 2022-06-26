import { createSlice } from '@reduxjs/toolkit'

export const childsSlice = createSlice({
  name: 'childs',
  initialState: {
    childs:[],
    childsByParent:[],
    isLoadingChilds:false
  },
  reducers: {
    startLoadingChilds:(state) => {
        state.isLoadingChilds = true;
    },

    setChilds:(state,action) => {
        state.childs = action.payload.childs
        state.isLoadingChilds = false;
    },

    setChildsByParent:(state, action) => {
        // console.log(action);
        state.childsByParent = state.childs.filter(item => (item.amenity_parent == action.payload.idParent) && (item.property_category == action.payload.idCategory));
        state.isLoadingChilds = false;
    }
  }
});

export const { startLoadingChilds, setChilds, setChildsByParent } = childsSlice.actions