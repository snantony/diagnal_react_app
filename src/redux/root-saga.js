import { all, call } from 'redux-saga/effects';

import { contentListSagas } from './contentList/contentList.sagas';

export default function* rootSaga() {
  yield all([call(contentListSagas)]);
}
