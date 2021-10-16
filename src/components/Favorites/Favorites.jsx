import React from "react";
import { useSelector } from "react-redux";
import styles from "./Favorites.module.css";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favoriteAlbum = useSelector((store) => store.favorites);
  if (favoriteAlbum.length === 0) {
    return (
      <div className={styles.favorite_container}>
        <Link
          to="/music"
          style={{ color: "rgb(69, 178, 133)", textDecoration: "none" }}
        >
          <i className="fas fa-plus "></i> Add album
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.favorite_container}>
      {favoriteAlbum.map((i) => {
        return <Cards key={i.id} album={i} />;
      })}
    </div>
  );
};

export default Favorites;
