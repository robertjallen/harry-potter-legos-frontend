import axios from 'axios'

//Fetch
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export function fetch() {

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