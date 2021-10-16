import {
  fETCH_DATA,
  FETCH_FAILED,
  FETCH_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  result: [],
  loading: false,
};

export const itemReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case fETCH_DATA: {
      return { ...state, loading: true };
    }
    case FETCH_FAILED: {
      return { ...state, loading: false, result: actions.payload.error };
    }
    case FETCH_SUCCESS: {
      return { ...state, loading: false, result: actions.payload.data };
    }
    default: {
      return state;
    }
  }
};
