import React from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import styles from "./MusicPage.module.css";

const MusicPage = () => {
  let { result } = useSelector((store) => store.items);
  const searchAlbum = useSelector((store) => store.search);

  return (
    <div className={styles.music_container}>
      {result
        .filter((album) =>
          album.title.label.toLowerCase().includes(searchAlbum.toLowerCase())
        )
        .map((album) => (
          <Cards key={album.id} album={album} />
        ))}
    </div>
  );
};

export default MusicPage;
