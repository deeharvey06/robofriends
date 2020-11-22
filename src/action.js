export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';


export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => dispatch( { type: REQUEST_ROBOTS_SUCCESS, payload: users }))
    .catch(error => dispatch( { type: REQUEST_ROBOTS_FAILED, payload: error }))
}

