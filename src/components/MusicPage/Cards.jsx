import React from "react";
import styles from "./MusicPage.module.css";
import { useDispatch } from "react-redux";
import { addFavorites, removeFavorites } from "../../actions/actions";
import { useSelector } from "react-redux";

const Cards = ({ album }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favorites);
  let present = favorites.find((i) => i.id === album.id);
  const trim = (str) => {
    return str.length > 35 ? str.substring(0, 35).concat("...") : str;
  };

  const openNewWindow = (e) => {
    e.stopPropagation();
    e.preventDefault();
    window.open(album.link.attributes.href);
  };

  const handleAddFavorites = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (present) {
      dispatch(removeFavorites(album));
    } else {
      dispatch(addFavorites(album));
    }
  };

  return (
    <div className={styles.cards} onClick={(e) => openNewWindow(e)}>
      <div className={styles.card_content}>
        <img src={album.image[2].label} alt={album.title} />
        <span>
          <i
            className={`${present ? "fas" : "far"} fa-heart`}
            id={`heart-${album.id}`}
            style={{ fontSize: "25px" }}
            onClick={(e) => handleAddFavorites(e)}
          ></i>
        </span>
      </div>

      <p>{trim(album.name.label)}</p>
    </div>
  );
};

export default Cards;
