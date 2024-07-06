import webstyle from "../webdesign.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";
import WebDesignPricingPlans from "../webdesignpricing/WebDesignPricingPlans";

const shadowsFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const WebDesignWorks = () => {
  return (
    <section className={webstyle.webWorksSection}>
      <h2 className={webstyle.WebHeader}>
        Our{" "}
        <span className={`${webstyle.headerSpan} ${shadowsFont.className}`}>
          Past
        </span>{" "}
        Works
      </h2>
      <div className={webstyle.webWorksContainer}>
        <div className={webstyle.webWorksShowcase}>
          <div className={webstyle.webworkDesign1}>
            <Image src="/Rectangle 61.png" fill />
          </div>
          <div className={webstyle.webworkDesign2}>
            <Image src="/Rectangle 62.png" fill />
          </div>
        </div>
      </div>
      <div className={webstyle.webWorksShowcase2}>
        <div className={webstyle.webworkDesign3}>
          <Image src="/Rectangle 30.png" fill />
        </div>
        <div className={webstyle.webworkDesign4}>
          <Image src="/Rectangle 29.png" fill />
        </div>
        <div className={webstyle.webworkDesign5}>
          <Image src="/Rectangle 30.png" fill />
        </div>
      </div>
      <div className={webstyle.webdesignContentsContainer}>
        <div className={webstyle.webdesignContents1}>
          <div className={webstyle.webdesignTextContent}>
            <h2>
              Tailored website designs that reflect your brand’s identity and
              values.
            </h2>
            <button>Get Started</button>
          </div>
          <div className={webstyle.webdesignimgContent}>
            <div className={webstyle.webdesignImg}>
              <Image src="/Rectangle 63.png" fill />
            </div>
          </div>
        </div>
        <div className={webstyle.webdesignContent2}>
          <div className={webstyle.webdesignimgContent}>
            <div className={webstyle.webdesignImg}>
              <Image src="/Rectangle 63 (1).png" fill />
            </div>
          </div>
          <div className={webstyle.webdesignTextContent2}>
            <h2>
              Tailored website designs that reflect your brand's identity and
              values.
            </h2>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <WebDesignPricingPlans />
    </section>
  );
};

export default WebDesignWorks;
