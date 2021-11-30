import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import ContentListActionTypes from "./contentList.types";

import {
  setContentList,
  setSearchedContentList,
  setError,
} from "./contentList.actions";

export function* getMoviesList({ payload }) {
  const { pageNo, query, type } = payload;
  try {
    const res = yield axios({
      method: "GET",
      url: `https://diagnal-node-app.herokuapp.com/contents/${pageNo}`,
      params: {
        q: query,
      },
    });
    const { fileData, totalCount, totalDataFetched } = res.data.message.data;
    const { page } = fileData;
    const payload = {
      title: page.title,
      data: page["content-items"].content,
      totalItems: totalCount,
      pagesFetched: totalDataFetched,
    };
    if (type === "search") {
      yield put(setSearchedContentList(payload));
    }
    if (type === "scroll") {
      yield put(setContentList(payload));
    }
  } catch (error) {
    yield put(setError(error));
  }
}

export function* onFetch() {
  yield takeLatest(ContentListActionTypes.ON_FETCHING_LIST, getMoviesList);
}

// export function* onSearch() {
//   yield takeLatest(ContentListActionTypes.ON_SEARCH, getMoviesList);
// }

export function* contentListSagas() {
  yield all([call(onFetch)]);
}
