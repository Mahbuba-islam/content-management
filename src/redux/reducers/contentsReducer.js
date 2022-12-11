const {  GET_CONTENT } = require("../actionTypes/actionTypes")


const initialState = {
    blogs: [],
    
  
}

const contentsReducers = (state = initialState, action)=>{
    switch(action.type){
        case GET_CONTENT:
            return{
                ...state,
                blogs:action.payload,
            }
            default:
                return state

    }
}


export default contentsReducers