import { setCategories, setCategory } from "./categoriesSlice";


export const getCategories = () => {
    return async (dispatch, getState) => {
        
        // dispatch(startLoadingParents());
        
        try {
            // doorvelApi
            const resp = await fetch('http://54.177.198.128:8001/api/cat-properties-categories/');
            const response = await resp.json();
            dispatch(setCategories({categories:response.results}));
            dispatch(setCategory({...response.results[0]}))
            
        } catch (error) {
            
        }
    }
}