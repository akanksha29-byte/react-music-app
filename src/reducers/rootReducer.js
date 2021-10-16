import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import { itemReducer } from "./itemReducer";
import { searchReducer } from "./searchReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const combineReducer = combineReducers({
  items: itemReducer,
  search: searchReducer,
  favorites: favoritesReducer,
});

export const rootReducer = persistReducer(persistConfig, combineReducer);
