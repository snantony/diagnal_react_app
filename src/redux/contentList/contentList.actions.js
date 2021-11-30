import ContentListActionTypes from './contentList.types';

export const onFetchList = (config) => ({
  type: ContentListActionTypes.ON_FETCHING_LIST,
  payload: config
});

export const onSearch = (config) => ({
  type: ContentListActionTypes.ON_SEARCH,
  payload: config
});


export const setContentList = (data) => ({
  type: ContentListActionTypes.SET_CONTENT_LIST,
  payload: data
});

export const setSearchedContentList = (data) => ({
  type: ContentListActionTypes.SET_SEARCHED_CONTENT_LIST,
  payload: data
});


export const setError = (error) => ({
  type: ContentListActionTypes.SET_ERROR,
  payload: error
});

