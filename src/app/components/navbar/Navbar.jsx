import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Koulen } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
});

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300"],
});

const Navbar = () => {
  return (
    <div className={`${styles.parent} ${plus_Jakarta_Sans.className}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="logo" fill />
          </div>
        </Link>
        <div>
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
