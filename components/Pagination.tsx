import Styles from "../styles/styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IfetchResponse } from "@/types";

type propsType = {
  data: IfetchResponse<any>,
  slash: string
}

export default function Pagination({ data, slash } : propsType ) {
  const totalPages = data.count / 10;
  const pageArray = [];
  for (let i = 0; i < totalPages; i++) {
    pageArray.push("");
  }
  console.log(slash);

  return (
    <div className={Styles.pageWrapper__pagination}>
      {pageArray.map((page, index) => (
        <Link key={index} href={`/${slash}?page=${index + 1}`}>
          {index + 1}
        </Link>
      ))}
    </div>
  );
}
