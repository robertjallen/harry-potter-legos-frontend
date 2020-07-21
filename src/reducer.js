import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from "./actions";


const initialState = {
  // our "success" state
  legos: [],
  // want to make sure we account for all possible states,
  // including the loading and error states
  isLoading: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    //FETCH VENUES REDUCER CASES
    case FETCH_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        legos: [...action.payload],
        isLoading: false
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    
    default:
      return state;
  }
}