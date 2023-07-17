import Card from "@/components/Card";
import Styles from "../../styles/styles.module.scss";
import Pagination from "@/components/Pagination";
import { Istarships, propsPageType } from "@/types";
import { notFound } from "next/navigation";
import { fetchApi } from "@/utils";

export default async function starshipsPage({ searchParams }: propsPageType) {
  const page = searchParams.page || "";
  const baseUrl = "https://swapi.dev/api/starships";
  const data = await fetchApi<Istarships>(baseUrl, page);
  if (!data) notFound();
  const slash = "starships";
  const imageList = ["corvette", "assaultstarfighter", "landingcraft"];

  return (
    <div className={Styles.pageWrapper}>
      <div className={Styles.pageWrapper__cardsContainer}>
        {data.results.map((starship, key) => {
          const image = imageList.includes(
            starship.starship_class.replace(/\s/g, "")
          )
            ? starship.starship_class.replace(/\s/g, "")
            : "assaultstarfighter";
          return (
            <Card
              image={image}
              title={starship.name}
              description={`${starship.starship_class}, ${starship.crew}`}
              key={key}
            />
          );
        })}
      </div>
      <Pagination data={data} slash={slash} />
    </div>
  );
}
