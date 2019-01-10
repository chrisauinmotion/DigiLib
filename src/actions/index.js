import { SEARCH_BOOKS, FILTER_BOOKS, BOOK_DETAIL, CLEAR_DETAIL } from './types';
import axios from 'axios';

const URL_ROOT = 'http://openlibrary.org';

export function getBooks(searchTerm, searchBy) {
  searchTerm = searchTerm.split(' ').reduce((str, curStr, idx, arr) => {
    if (idx < arr.length - 1) return str + `${curStr}+`;
    else return str + `${curStr}`;
  }, '');
  const URL =
    searchBy === 'author'
      ? `${URL_ROOT}/search.json?author=${searchTerm}&limit=25`
      : `${URL_ROOT}/search.json?q=${searchTerm}&limit=3`;
  const request = axios.get(URL).then(data => data);

  return {
    type: SEARCH_BOOKS,
    payload: request
  };
}

export function filterBooks(keyword) {
  return {
    type: FILTER_BOOKS,
    payload: keyword
  };
}

export async function bookDetail(id) {
  id = id.slice(0, id.indexOf('+'));
  const URL = `${URL_ROOT}/api/books?bibkeys=${id}&jscmd=details&format=json`;
  const request = await axios.get(URL).then(data => data);

  return {
    type: BOOK_DETAIL,
    payload: request.data
  };
}

export function clearDetail() {
  return {
    type: CLEAR_DETAIL
  };
}
