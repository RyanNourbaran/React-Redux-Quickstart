// Stores contain all the states

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);
store.subscribe(() => console.log("Look ma, Redux!!"));
export default store;

/**
 * to test actions/dispatch, use subscribe function with a callback function
 * ie. store.subscribe(() => console.log('Look ma, Redux!!'))
 */
