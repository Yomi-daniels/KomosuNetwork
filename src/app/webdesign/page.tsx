import WebDesignLandingpage from "./webdesignlandingpage/WebDesignLandingpage.tsx";
import webstyle from "./webdesign.module.css";
import WebDesignWorks from "./webdesignworks/WebDesignWorks.tsx";
import Testimonials from "@/sections/testimonials.tsx";
import FAQ from "@/sections/faq.tsx";
const webdesign = () => {
  return (
    <section className={webstyle.webdesignSection}>
      <WebDesignLandingpage />
      <WebDesignWorks />
      <Testimonials />
      <FAQ />
    </section>
  );
};

export default webdesign;
