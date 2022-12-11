import { getContent } from "../../action/contentAction";


const getcontentData = () =>{
    return async (dispatch, getState) =>{
        const res = await fetch("http://localhost:5000/content")
        const data = await res.json();
        if(data.data.length){
            dispatch(getContent(data.data))
        }
    }
}

export default getcontentData