import {
  SEARCH_BOOKS,
  FILTER_BOOKS,
  BOOK_DETAIL,
  CLEAR_DETAIL
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case SEARCH_BOOKS:
      return { ...state, list: action.payload, filteredList: action.payload };
    case FILTER_BOOKS:
      const filteredDocs = state.list.data.docs.filter(
        book =>
          book.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
      );
      return {
        ...state,
        filteredList: {
          ...state.filteredList,
          data: { ...state.filteredList.data, docs: filteredDocs }
        }
      };
    case BOOK_DETAIL:
      return { ...state, detail: action.payload };
    case CLEAR_DETAIL:
      return { ...state, detail: [] };
    default:
      return state;
  }
}
