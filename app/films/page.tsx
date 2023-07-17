import Card from "@/components/Card";
import Styles from "../../styles/styles.module.scss";
import Pagination from "@/components/Pagination";
import { Ifilms, propsPageType } from "@/types";
import { fetchApi } from "@/utils";
import { notFound } from "next/navigation";

export default async function filmsPage({ searchParams } : propsPageType ) {
  const page = searchParams.page || "";
  const baseUrl = "https://swapi.dev/api/films";
  const data = await fetchApi<Ifilms>(baseUrl, page);
  if (!data) notFound();
  const slash = "films";
  const imageList = ["ANewHope","TheEmpireStrikesBack","ReturnoftheJedi","ThePhantomMenace","Attackoftheclones","RevengeoftheSith"];

  return (
    <div className={Styles.pageWrapper}>
      <div className={Styles.pageWrapper__cardsContainer}>
        {data.results.map((film, key) => {
          const image = imageList.includes(
            film.title.replace(/\s/g, "")
          )
            ? film.title.replace(/\s/g, "")
            : "Attackoftheclones";

            console.log(film.title)
          return (
            <Card
              image={image}
              title={film.title}
              description={`${film.director}, ${film.release_date}`}
              key={key}
            />
          );
        })}
      </div>
      <Pagination data={data} slash={slash} />
    </div>
  );
}