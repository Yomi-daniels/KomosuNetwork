"use client";
import Image from "next/image";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

const links = [
  {
    title: "About Us",
    
    path: "/about",
  },
  {
    title: "Services",
    path: "/servicesLink",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "Contact",
    path: "/contact",
  },

  {
    title: "Request Demo",
    path: "/request-demo",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      >
        <Image src="/menu-bar.svg" fill />
      </button>
      {open && (
        <div className={styles.mobileContainer}>
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
