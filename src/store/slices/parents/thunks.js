import { doorvelApi } from "../../../api/dorrvelApi";
import { getChilds, setChildsByParent } from "../childs";
import { setParent, setParents, startLoadingParents } from "./parentSlice"

export const getParents = () => {
    return async (dispatch, getState) => {
        
        dispatch(startLoadingParents());
        
        try {
            // doorvelApi
            const resp = await fetch('http://54.177.198.128:8001/api/cat-amenities-parents/');
            const response = await resp.json();
            dispatch(setParent({...response.data[0]}))
            dispatch(setParents({parents:response.data}));
            
        } catch (error) {
            
        }
    }
}