import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./action-creators/reducers";


export const store = createStore(reducers,{},applyMiddleware(thunk))