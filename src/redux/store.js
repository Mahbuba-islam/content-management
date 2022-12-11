import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const { createStore, applyMiddleware } = require("@reduxjs/toolkit");
const { composeWithDevTools } = require("redux-devtools-extension");

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store