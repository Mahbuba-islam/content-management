import { GET_CONTENT, GET_CONTENT_DETAILS, UPLOAD_TIME } from "../actionTypes/actionTypes"


export const getContent = (data) => {
    return {
      type: GET_CONTENT,
      payload: data,
    };
  };

  export const contentDetails = (data) =>{
    return{
      type:GET_CONTENT_DETAILS,
      payload:data
    }
  }

  // sort action
  export const sortContent = (data) => {
    return {
      type:UPLOAD_TIME,
      payload:data
    }
  }