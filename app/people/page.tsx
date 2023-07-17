import Card from "@/components/Card";
import Styles from "../../styles/styles.module.scss";
import Pagination from "@/components/Pagination";
import { notFound } from "next/navigation";
import { Ipeople, propsPageType } from "@/types";
import { fetchApi } from "@/utils";


export default async function peoplePage({ searchParams } : propsPageType) {
  const page = searchParams.page || "";
  const baseUrl = "https://swapi.dev/api/people";
  const data = await fetchApi<Ipeople>(baseUrl, page);
  if (!data) notFound();
  const slash = "people";

  console.log(data);
  console.log(searchParams);

  return (
    <div className={Styles.pageWrapper}>
      <div className={Styles.pageWrapper__cardsContainer}>
        {data.results.map((people, key) => {
          const image = people.gender.replace(/\//g, "");
          return (
            <Card
              image={image}
              title={people.name}
              description={`${people.gender}, ${people.birth_year}`}
              key={key}
            />
          );
        })}
      </div>
      <Pagination data={data} slash={slash} />
    </div>
  );
}
