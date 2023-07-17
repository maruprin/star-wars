import Card from "@/components/Card";
import Styles from "../../styles/styles.module.scss";
import Pagination from "@/components/Pagination";
import { notFound } from "next/navigation";
import { Iplanets, propsPageType } from "@/types";
import { fetchApi } from "@/utils";

export default async function planetsPage({ searchParams }: propsPageType) {
  const page = searchParams.page || "";
  const baseUrl = "https://swapi.dev/api/planets";
  const data = await fetchApi<Iplanets>(baseUrl, page);
  if (!data) notFound();
  const slash = "planets";
  const imageList = ["arid", "temperate", "frozen", "murky"];

  return (
    <div className={Styles.pageWrapper}>
      <div className={Styles.pageWrapper__cardsContainer}>
        {data.results.map((planet, key) => {
          const image = imageList.includes(planet.climate.split(",")[0])
            ? planet.climate.split(",")[0]
            : "frozen";
          return (
            <Card
              image={image}
              title={planet.name}
              description={`${planet.climate}, ${planet.terrain}`}
              key={key}
            />
          );
        })}
      </div>
      <Pagination data={data} slash={slash} />
    </div>
  );
}
