import { UPLOAD_TIME } from "../actionTypes/actionTypes"

export const initialState = {
    sorts: {
        uploads: [],
        
      },
}

export const sortReducer = (state=initialState, action)=> {
    switch(action.type){
      case UPLOAD_TIME:
        return {
            ...state,
            sorts: {
              ...state.sorts,
              uploads: [...state.sorts.uploads, action.payload],
            },
        }
            default:
                return state;
            
          }
        };