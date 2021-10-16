import { SEARCH } from "../actions/actionTypes";

export const searchReducer = (state = "", actions) => {
  switch (actions.type) {
    case SEARCH: {
      state = actions.payload.search;
      return state;
    }
    default: {
      return state;
    }
  }
};
