import { type } from "os";
import Styles from "../styles/styles.module.scss";
import Image from "next/image";

type cardPropsType = {
  title: string,
  description: string,
  image: string
}

export default function Card({ title, description, image }: cardPropsType) {

  return (
    <div className={Styles.pageWrapper__cardsContainer__card}>
      <Image
        alt={image}
        width={120}
        height={120}
        src={`/assets/${image}.png`}
      />
      <h2 className={Styles.card__title}>{title}</h2>
      <p className={Styles.card__description}>{description}</p>
    </div>
  );
}
