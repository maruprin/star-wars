import Link from "next/link";
import Styles from "../styles/styles.module.scss";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className={Styles.dashboard}>{children}</div>
    </main>
  );
}
