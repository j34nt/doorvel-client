import { createSlice } from '@reduxjs/toolkit'


export const parentSlice = createSlice({
  name: 'parent',
  initialState: {
    counter:10,
    parents:[],
    parent:null,
    isLoading:false
  },
  reducers: {
    startLoadingParents:(state) => {
        state.isLoading = true;
    },
    setParents:(state, action) => {
        state.isLoading = false;
        state.parents = action.payload.parents;
                
    },
    setParent:(state,action) => {
        state.parent = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingParents, setParents, setParent } = parentSlice.actions

// export default parentSlice.reducer