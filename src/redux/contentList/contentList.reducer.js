import ContentListActionTypes from "./contentList.types";

const INITIAL_STATE = {
  title: "",
  movieList: [],
  totalItems: 0,
  pagesFetched: 0,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContentListActionTypes.SET_CONTENT_LIST:
      console.log('SET_CONTENT_LIST');
      const { data, totalItems, pagesFetched, title } = action.payload;
      if (totalItems < state.pagesFetched) {
        return state;
      }
      return {
        ...state,
        title: title,
        movieList: [...state.movieList, ...data],
        totalItems: parseInt(totalItems),
        pagesFetched: state.pagesFetched + parseInt(pagesFetched),
        error: null,
      };
    case ContentListActionTypes.SET_SEARCHED_CONTENT_LIST:
      console.log('SET_SEARCHED_CONTENT_LIST');
      return {
        ...state,
        title: action.payload.title,
        movieList: action.payload.data,
        totalItems: parseInt(action.payload.totalItems),
        pagesFetched: parseInt(action.payload.pagesFetched),
        error: null,
      };
    case ContentListActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
