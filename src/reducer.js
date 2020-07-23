import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  POST_START,
  POST_SUCCESS,
  POST_ERROR,
} from "./actions";


const initialState = {
  // our "success" state
  legos: [],
  error: '',
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


      //POST LEGOS REDUCER CASES
    case POST_START:
      return {
        ...state,
        isLoading: true
      };
    case POST_SUCCESS:
      return {
        ...state,
        legos: [...action.payload],
        isLoading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    //DELETE LEGOS REDUCER CASES
    case DELETE_START:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        legos: [...action.payload],
        isLoading: false
      };
    case DELETE_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    
    default:
      return state;
  }
}