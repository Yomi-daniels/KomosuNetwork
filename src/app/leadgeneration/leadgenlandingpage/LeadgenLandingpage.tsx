"use client";
import leadStyles from "../leadgeneration.module.css";
import Image from "next/image";
import LandingPageButtons from "../../webdesign/components/LandingPageButtons";
import { Montserrat } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const LeadgenLandingpage: React.FC = () => {
  return (
    <section className={leadStyles.LeadingGenSection}>
      <div className={leadStyles.LeadGenContainer}>
        {/* <div className={leadStyles.vectortopImg}>
        <Image src="/yellow vector.png" fill alt="Yellow Vector"/>
      </div> */}
        <div
          className={`${leadStyles.leadGenTextContainer} ${montserrat.className}`}
        >
          <div className={leadStyles.leadtextheader}>
            <div className={leadStyles.textheaderimg}>
              <Image src="/Vector (5).png" layout="fill" alt="Vector" />
            </div>
            <h4>LEAD GENERATION</h4>
          </div>
          <h1>
            Drive more leads and transform your dealership growth with our
            expert solutions
          </h1>
          <LandingPageButtons />
        </div>
        <div className={leadStyles.leadGenaImageContainer}>
          <ScrollParallax isAbsolutelyPositioned>
            <div className={leadStyles.leadimgstat}>
              <Image
                src="/Stat (4).png"
                layout="fill"
                objectFit="contain"
                alt="Stat"
              />
            </div>
          </ScrollParallax>
          <div className={leadStyles.leadmanImg}>
            <Image
              src="/leadgen man.png"
              layout="fill"
              objectFit="cover"
              alt="Leadgen Man"
            />
          </div>
          <ScrollParallax isAbsolutelyPositioned>
            <div className={leadStyles.leadimgstat2}>
              <Image
                src="/Stat (3).png"
                layout="fill"
                objectFit="contain"
                alt="Stat 2"
              />
            </div>
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
};

export default LeadgenLandingpage;
