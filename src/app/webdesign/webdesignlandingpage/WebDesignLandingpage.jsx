"use client";
import webstyle from "../webdesign.module.css";
import Image from "next/image";
import LandingPageButtons from "../components/LandingPageButtons";
import { ScrollParallax } from "react-just-parallax";
import { Montserrat } from "next/font/google";
import { useRef } from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});
const WebDesignLandingpage = () => {
  const parallaxRef = useRef(null);
  return (
    <section className={webstyle.webdesignLandingPage}>
      <div className={webstyle.vectorImagetop}>
        <Image src="/webdesign vector.png" fill />
      </div>
      <div className={webstyle.webdesignLandingPageContainer}>
        <div
          className={`${webstyle.webdesignTextContainer} ${montserrat.className}`}
        >
          <div className={webstyle.headerContent}>
            <div className={webstyle.headerimg}>
              <Image src="/Vector (5).png" fill />
            </div>
            <h4>WEB DESIGN</h4>
          </div>
          <h1>
            Drive your automotive company forward with innovative and stunning
            web design
          </h1>
          <LandingPageButtons />
        </div>
        <ScrollParallax isAbsolutelyPositioned>
          <div className={webstyle.webdesignImageContainer} ref={parallaxRef}>
            <div className={webstyle.webimage}>
              <Image src="/Frame 126.png" fill />
            </div>

            <div className={webstyle.webimage2}>
              <Image src="/New Macbook Pro Mockup Front View.png" fill />
            </div>
          </div>
        </ScrollParallax>
      </div>
      <div className={webstyle.vectorImagebottom}>
        <Image src="/webdesign vector.png" fill />
      </div>
    </section>
  );
};

export default WebDesignLandingpage;
