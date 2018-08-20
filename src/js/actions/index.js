// Actions are objects (within functions) that can be sent to the Store to retrieve new states
import { ADD_ARTICLE } from "../constants/action-types";

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});
