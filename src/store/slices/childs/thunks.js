import { setChilds, startLoadingChilds } from "./childsSlice"


export const getChilds = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingChilds());
        try {
            const resp = await fetch('http://54.177.198.128:8001/api/cat-amenities-childs/');
            const response = await resp.json();
            dispatch(setChilds({childs:response.results}))
        } catch (error) {
            
        }
    }
}