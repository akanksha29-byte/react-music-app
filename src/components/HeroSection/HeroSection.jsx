import React from "react";
import styles from "./HeroSection.module.css";
import { Button } from "react-bootstrap";
import heroImage from "../../images/hero_image.jpg";

const HeroSection = () => {
  return (
    <div className={styles.hero_container}>
      <section className={styles.hero_info}>
        <h1 style={{ fontWeight: "bold" }}>Music App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum
          adipisci, molestias debitis placeat doloribus reiciendis, esse
          expedita consectetur nesciunt itaque, facilis incidunt autem vitae
          distinctio perferendis atque dolor officia.
        </p>
        <Button className={styles.btn}>Get Started</Button>
      </section>
      <img src={heroImage} alt="hero-img-man-listining-music" />
    </div>
  );
};

export default HeroSection;
