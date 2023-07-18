import Card from "@/components/Card";
import Styles from "../../styles/styles.module.scss";
import Pagination from "@/components/Pagination";
import { notFound } from "next/navigation";
import { Ispecies, propsPageType } from "@/types";
import { fetchApi } from "@/utils";

export default async function speciesPage({ searchParams }: propsPageType) {
  const page = searchParams.page || "";
  const baseUrl = "https://swapi.dev/api/species";
  const data = await fetchApi<Ispecies>(baseUrl, page);
  if (!data) notFound();
  const slash = "species";
  const imageList = ["Wookie", "Droid", "Trandoshan"];
  console.log(data);
  return (
    <div className={Styles.pageWrapper}>
      <div className={Styles.pageWrapper__cardsContainer}>
        {data.results.map((specie, key) => {
          const image = imageList.includes(specie.name)
            ? specie.name
            : "Wookie";
          return (
            <Card
              image={image}
              title={specie.name}
              description={`${specie.classification}, ${specie.designation}`}
              key={key}
            />
          );
        })}
      </div>
      <Pagination data={data} slash={slash} />
    </div>
  );
}
