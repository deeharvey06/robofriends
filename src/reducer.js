
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
}  from './action';

const intialStateSearch = {
  searchTerms: '',
}

const intialStateRobots = {
  isPending: false,
  robots: [],
  error: '',
}

export const searchReducer = (state = intialStateSearch, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return  { ...state, searchTerms: action.payload }
    default:
      return state;
  }
}

export const robotReducer = (state = intialStateRobots, action) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload }
    case REQUEST_ROBOTS_FAILED:
      return { ...state, isPending:false, error: action.payload }
    default:
      return state;
  }
}