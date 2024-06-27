import styles from "./sections.module.css";
import Image from "next/image";
import { Shadows_Into_Light } from "next/font/google";
const shadowFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ['400']
})
const Offer = () => {
  return <section className={styles.OfferSection}>
    <h2 className={styles.offerHeader}>WHAT WE OFFER OUR <span className={`${styles.servicesSpan} ${shadowFont.className}`}>CLIENTS</span></h2>
    <div className={styles.offerContainer}>
      <div className={styles.offerSelectProps}>
        <li>Web Design</li>
        <li>AI Solutions</li>
        <li>Content Marketing</li>
        <li>Lead Generation</li>
      </div>
      <div className={styles.webDesignContainer}>
        <div className={styles.webDesignContent}>
          <div className={styles.webDesignHeader}>
            <div className={styles.webHeaderImgBg}>
              <div className={styles.webHeaderImg}>
                <Image src="/Vector (12).png" fill/>
              </div>
            </div>
            <h5>WEB DESIGN</h5>
          </div>
          <h1 className={styles.webDesignh1}>Drive your automotive company forward with innovative and stunning web design</h1>
          <div className={styles.WebDesignFeatures}>
            <div className={styles.WebDesignFeaturesContent}>
              <div  className={styles.webFeaturesImgShadow}>
                <div className={styles.webFeaturesImg}>
                  <Image src="/Vector (10).png" fill/>
                </div>
              </div>
              <p>Tailored website designs that reflect your brand's identity and values.</p>
            </div>
            <div className={styles.WebDesignFeaturesContent}>
              <div  className={styles.webFeaturesImgShadow}>
                <div className={styles.webFeaturesImg}>
                  <Image src="/Vector (10).png" fill/>
                </div>
              </div>
              <p>Secure and efficient online booking and purchasing systems.</p>
            </div>
            <div className={styles.WebDesignFeaturesContent}>
              <div  className={styles.webFeaturesImgShadow}>
                <div className={styles.webFeaturesImg}>
                  <Image src="/Vector (10).png" fill/>
                </div>
              </div>
              <p>Comprehensive SEO strategies to improve search engine rankings.</p>
            </div>
            <div className={styles.WebDesignFeaturesContent}>
              <div  className={styles.webFeaturesImgShadow}>
                <div className={styles.webFeaturesImg}>
                  <Image src="/Vector (10).png" fill/>
                </div>
              </div>
              <p>Integration with CRM systems for better customer relationship management.</p>
            </div>
            <div className={styles.WebDesignFeaturesContent}>
              <div  className={styles.webFeaturesImgShadow}>
                <div className={styles.webFeaturesImg}>
                  <Image src="/Vector (10).png" fill/>
                </div>
              </div>
              <p>Virtual showrooms to display your vehicle lineup.</p>
            </div>
          </div>
        </div>
        <div className={styles.webDesignCard}></div>
      </div>
    </div>
  </section>;
};

export default Offer;
