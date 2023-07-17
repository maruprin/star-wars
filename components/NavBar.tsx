"use client";
import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/styles.module.scss";
import menuIcon from "/public/assets/menu.svg";
import closeIcon from "/public/assets/close.svg";
import homeIcon from "/public/assets/home.png";
import { useEffect, useState } from "react";

const links = [
  {
    label: "Planets",
    route: "/planets",
  },
  {
    label: "Starships",
    route: "/starships",
  },
  {
    label: "Vehicles",
    route: "/vehicles",
  },
  {
    label: "People",
    route: "/people",
  },
  {
    label: "Films",
    route: "/films",
  },
  {
    label: "Species",
    route: "/species",
  },
];

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu);
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (window.innerWidth >= 720) {
      setToggleMenu(true);
    }
  }, []);

  return (
    <header className={Styles.header}>
      <div onClick={handleMenuClick} className={Styles.header__menuIcon}>
        <Image
          alt="menu"
          width={40}
          height={40}
          src={isMenuOpen ? closeIcon : menuIcon}
        />
      </div>
      <div className={Styles.header__logo}>
        <Link href="/">
          <Image alt="home" width={100} height={100} src={homeIcon} />
        </Link>
      </div>

      <nav
        className={`${Styles.sidebar} ${toggleMenu ? Styles.showSidebar : ""}`}
      >
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
