import { combineReducers } from 'redux';

import contentListReducer from './contentList/contentList.reducer';


const rootReducer = combineReducers({
  contentList: contentListReducer,
});

export default rootReducer;
