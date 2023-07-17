import Card from "@/components/Card";
import Styles from "../../styles/styles.module.scss";
import Pagination from "@/components/Pagination";
import { notFound } from "next/navigation";
import { IfetchResponse, Ivehicles, propsPageType } from "@/types";
import { fetchApi } from "@/utils";

export default async function vehiclesPage({ searchParams } : propsPageType) {
  const page = searchParams.page || "";
  const baseUrl = "https://swapi.dev/api/vehicles";
  const data = await fetchApi<Ivehicles>(baseUrl, page);
  if (!data) notFound();
  const slash = "vehicles";
  const imageList = ["wheeled", "repulsorcraft", "starfighter"];

  console.log(data);
  console.log(searchParams);

  return (
    <div className={Styles.pageWrapper}>
      <div className={Styles.pageWrapper__cardsContainer}>
        {data.results.map((vehicle, key) => {
          const image = imageList.includes(
            vehicle.vehicle_class
          )
            ? vehicle.vehicle_class
            : "assaultstarfighter";
          return (
            <Card
              image={image}
              title={vehicle.name}
              description={`${vehicle.vehicle_class}, ${vehicle.model}`}
              key={key}
            />
          );
        })}
      </div>
      <Pagination data={data} slash={slash} />
    </div>
  );
}