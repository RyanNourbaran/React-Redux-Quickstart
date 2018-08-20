import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;

/**
 * to test actions/dispatch, use subscribe function with a callback function
 * ie. store.subscribe(() => console.log('Look ma, Redux!!'))
 */
