import { ADD_FAVORITES, REMOVE_FAVORITES } from "../actions/actionTypes";

export const favoritesReducer = (state = [], actions) => {
  switch (actions.type) {
    case ADD_FAVORITES: {
      const { album } = actions.payload;

      let present = state.find((o) => o.id === album.id);
      if (!present) {
        state = [...state, album];
      }

      return state;
    }
    case REMOVE_FAVORITES: {
      const { album } = actions.payload;
      state = state.filter((i) => i.id !== album.id);
      return state;
    }
    default: {
      return state;
    }
  }
};
