import React from "react";
import styles from "./Favorites.module.css";
import { useDispatch } from "react-redux";
import { removeFavorites } from "../../actions/actions";

const Cards = ({ album }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <img
        variant="top"
        src={album.image[2].label}
        style={{
          height: `${album.image[1].attributes.height}px`,
          width: `${album.image[1].attributes.height}px`,
        }}
        alt={album.title.label}
      />

      <section className="d-flex justify-content-between align-items-center">
        <h6>{album.title.label}</h6>
        <p>
          <strong>Catagory:</strong> {album.category.attributes.term}
        </p>
        <span>
          <i
            className="fas fa-times"
            style={{ fontSize: "20px" }}
            onClick={() => {
              dispatch(removeFavorites(album));
            }}
          ></i>
        </span>
      </section>
    </div>
  );
};

export default Cards;
