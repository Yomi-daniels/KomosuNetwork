"use client";

import Image from "next/image";
import styles from "./sections.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
// import { Montserrat } from "next/font/google";
// const montserratFont = Montserrat({
//   subsets: ["latin"],
//   weight: ["900"],
// });
// import localFont from 'next/font/local';
// const satoshiFont = localFont({
//   src: '/fonts/Satoshi-Regular.otf'
// });

const LandingPage = () => {
  const videoRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroSubRef = useRef(null);
  const navbarRef = useRef(null);
  const headerContentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.to(headerContentRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      heroTextRef.current,
      { x: -100, scale: 0.5 },
      { x: -0, scale: 1, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      heroSubRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.3, ease: "elastic.inOut", delay: 0.5 }
    );

    gsap.to(
      buttonRef.current,

      {
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: "circ.inOut",
      }
    );
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImg}>
          <Image src="/landing image.png" layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className={styles.HeroText}>
        <p className={styles.heroSub}>GROW AND EXPAND YOUR BUSINESS WITH</p>
        <h1 className={styles.heroHeader}>
          <span className={styles.heroSpan}>KOMOSU</span> NETWORK
        </h1>
        <Link href="/about">
          <button className={styles.headerbtn}>
            Learn more
            <div className={styles.buttonImageBg}>
              <div className={styles.buttonImage}>
                <Image src="/Vector.png" alt="vector" fill />
              </div>
            </div>
          </button>
        </Link>
      </div>
      <div className={styles.HeaderContent}>
        <p className={styles.heroSubText}>
          Our team of experts will help provide long lasting solutions for your
          business through web design, AI Solutions, and other high quality
          impressions through content marketing and lead generations.
        </p>
      </div>
    </section>
  );
};

export default LandingPage;
