import axios from "axios";
import {
  fETCH_DATA,
  FETCH_SUCCESS,
  FETCH_FAILED,
  SEARCH,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
} from "./actionTypes";

export const fetchData = () => {
  return {
    type: fETCH_DATA,
  };
};

export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchFailed = (error) => {
  return {
    type: FETCH_FAILED,
    payload: {
      error,
    },
  };
};

export const searchAlbum = (search) => {
  return {
    type: SEARCH,
    payload: {
      search,
    },
  };
};

export const addFavorites = (album) => {
  return {
    type: ADD_FAVORITES,
    payload: {
      album,
    },
  };
};

export const removeFavorites = (album) => {
  return {
    type: REMOVE_FAVORITES,
    payload: {
      album,
    },
  };
};

export const getItems = () => {
  return (dispatch) => {
    dispatch(fetchData());
    axios
      .get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then((result) => {
        let data = result.data.feed.entry;
        data = data.map((i) => {
          const {
            "im:image": image,
            link,
            "im:name": name,
            title,
            category,
          } = i;
          const { "im:id": id } = i.id.attributes;
          return { id, image, link, name, title, category };
        });
        dispatch(fetchSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
