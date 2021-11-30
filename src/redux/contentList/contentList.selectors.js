import { createSelector } from 'reselect';

const selectContentList = state => state.contentList;

export const selectMovieList = createSelector(
  [selectContentList],
  contentList => contentList.movieList
);

export const selectTotalItems = createSelector(
  [selectContentList],
  contentList => contentList.totalItems
);

export const selectPagesFetched = createSelector(
  [selectContentList],
  contentList => contentList.pagesFetched
);

export const selectTitle = createSelector(
  [selectContentList],
  contentList => contentList.title
);
