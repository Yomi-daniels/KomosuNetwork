"use client";
import Image from "next/image";
import styles from "./sections.module.css";
import { Montserrat } from "next/font/google";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

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
      { x: -0, scale: 1, opacity: 1, duration: 1, ease: "back.in" }
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
    <>
      <div className={styles.heroSection}>
        <video
          ref={videoRef}
          className={styles.VideoBg}
          autoPlay
          muted
          playsInline
        >
          <source src="/Hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.HeroText}>
          <p className={styles.heroSub} ref={heroSubRef}>
            Grow and expand your business with
          </p>
          <h1
            className={`${styles.heroHeader} ${montserrat.className}`}
            ref={heroTextRef}
          >
            <span className={styles.heroSpan}>KOMOSU</span> NETWORK
          </h1>
          <button className={styles.headerbtn} ref={buttonRef}>
            Learn more
            <div className={styles.buttonImageBg}>
              <div className={styles.buttonImage}>
                <Image src="/Vector.png" alt="vector" fill />
              </div>
            </div>
          </button>
        </div>
        <div className={styles.HeaderContent} ref={headerContentRef}>
          <p className={styles.heroSubText}>
            Our team of experts will help provide long lasting solutions for
            your business through web design, AI Solutions, and other high
            quality impressions through content marketing and lead generations.
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
