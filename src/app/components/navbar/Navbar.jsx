import Link from "next/link";
import Links from "./links/Links";
import NavBarstyles from "./navbar.module.css";
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
    <div className={`${NavBarstyles.parent} ${plus_Jakarta_Sans.className}`}>
      <div className={NavBarstyles.container}>
        <Link href="/" className={NavBarstyles.logo}>
          <div className={NavBarstyles.logoContainer}>
            <Image src="/logo.png" alt="logo" fill />
          </div>
        </Link>
        <div className={NavBarstyles.navbar}>
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
