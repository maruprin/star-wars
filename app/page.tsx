import React from "react";
import StarWars from "/public/assets/sw2.png";
import Image from "next/image";
import Styles from "../styles/styles.module.scss";

export default function page() {
  return (
    <div className={Styles.home}>
      <Image
        className={Styles.home__image}
        alt="star wars"
        width={300}
        height={300}
        src={StarWars}
      />
    </div>
  );
}
