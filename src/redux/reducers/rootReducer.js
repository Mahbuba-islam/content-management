// const { combineReducers } = require("@reduxjs/toolkit");
// const {  contentsReducers } = require("./contentsReducer");
// const { sortReducers } from "./sortReducer";

// const rootReducer = combineReducers({
//     content:contentsReducers,
//     sort:sortReducers,
// })

// export default rootReducer

import { combineReducers } from "redux";
import contentsReducers from "./contentsReducer";


import { sortReducer } from "./sortReducer";

const rootReducer = combineReducers({
    content:contentsReducers,
    uploads:sortReducer
});

export default rootReducer;