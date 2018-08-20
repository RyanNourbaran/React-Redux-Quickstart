// Reducers return states

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      /*cannot use push because the original state is immutable
      *   state.articles.push(action.payload);
      */

      //Use concat(), slice(), or ...spread for arrays
      //Use Obj.assign() and ...spread for objects
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;
