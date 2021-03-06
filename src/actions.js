import axios from 'axios'

//Fetch
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

//Post
export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERROR = "POST_ERROR";

//DELETE
export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_ERROR = "DELETE_ERROR";

export function fetch() {
  console.log("fetch triggered")
  // this is our "thunk" function. redux-thunk middleware
  // automatically gives us access to the dispatcher as a parameter
  return dispatch => {
    // we can kick off as many actions as we want,
    // whenever we want. allows our action creator to be asyncronous.
    dispatch({ type: FETCH_START });
    axios
      .get(
        `https://harry-potter-legos.herokuapp.com/api/legos`
      )
      .then(res => {
        // Code for handling API response
        console.log("LEGOS", res.data);
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch(function() {
        // Code for handling errors
      });
  };
}


export function post(lego) {

  // this is our "thunk" function. redux-thunk middleware
  // automatically gives us access to the dispatcher as a parameter
  return dispatch => {
    // we can kick off as many actions as we want,
    // whenever we want. allows our action creator to be asyncronous.
    dispatch({ type: POST_START });
    axios
      .post(
        `https://harry-potter-legos.herokuapp.com/api/legos`
      , lego)
      .then(res => {
        // Code for handling API response
        console.log("LEGOS", res.data);
        dispatch({ type: POST_SUCCESS, payload: res.data });
      })
      .catch(function() {
        // Code for handling errors
      });
  };
}

export function deleteLego(ID) {

  // this is our "thunk" function. redux-thunk middleware
  // automatically gives us access to the dispatcher as a parameter
  return dispatch => {
    // we can kick off as many actions as we want,
    // whenever we want. allows our action creator to be asyncronous.
    dispatch({ type: DELETE_START });
    axios
      .delete(
        `https://harry-potter-legos.herokuapp.com/api/legos/${ID}`)
      .then(res => {
        // Code for handling API response
        console.log("LEGOS", res.data);
        dispatch({ type: DELETE_SUCCESS, payload: res.data });
      })
      .catch(function() {
        // Code for handling errors
      });
  };
}


