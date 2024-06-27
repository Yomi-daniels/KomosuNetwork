import styles from "./sections.module.css"
import Image from "next/image";
const OfferAnimation = () => {
  return <section className={styles.OfferAnimationSection}>
  <div className={styles.offerAnimHeaderContent}>
    <h2 className={styles.offerAnimHeaderh2}>Drive your automotive company forward with innovative and stunning web design</h2>
    <button className={styles.OfferHeaderButton}>Book a Demo</button>
    <div className={styles.LineContainer}>
      <div className={styles.lineImg}>
        <Image src="/Rectangle 3.png" fill/>
      </div>
      <div className={styles.lineImg2}>
        <Image src="/Rectangle 4.png" fill/>
      </div>
    </div>
  </div>
    <div className={styles.OfferAnimationContainer}>
    <div className={styles.OfferAnimationContainerContent}>
      <div className={styles.OfferAnimationContainerContentHeader}>
        <div className={styles.OfferAnimationContainerContentSmallImage}>
          <Image src="/Vector (5).png" fill/>
        </div>
        <h6>PROMOTIONAL VIDEOS</h6>
      </div>
      <h3>Capture attention with high-quality visuals and engaging content that keeps viewers interested.</h3>
      <div className={styles.offerAnimationFeatures}>
      <div className={styles.offerFeaturesContent}>
              <div  className={styles.offerFeaturesImgShadow}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (6).png" fill/>
                </div>
              </div>
              <p>Understand past performance through detailed analysis of historical data.</p>
            </div>
            <div className={styles.offerFeaturesContent}>
              <div  className={styles.offerFeaturesImgShadow}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (6).png" fill/>
                </div>
              </div>
              <p>Provide data-driven recommendations to support strategic business decisions.</p>
            </div>
            </div>
            <div className={styles.OfferAnimationImageBoxContainer}>
              <div className={styles.OfferAnimationImageBoxContent}>
                <div className={styles.ImageBox}>
                  <Image src="/Rectangle 8.png" fill/>
                </div>
              </div>
              <div className={styles.OfferAnimationImageBoxContent}>
                <div className={styles.ImageBox2}>
                  <Image src="/Hero Image.png" fill/>
                </div>
              </div>
            </div>
    </div>
    <div className={styles.OfferAnimationContainerContent}>
      <div className={styles.OfferAnimationContainerContentHeader}>
        <div className={styles.OfferAnimationContainerContentSmallImage}>
          <Image src="/Vector (7).png" fill/>
        </div>
        <h6 className={styles.businessAnalytics}>BUSINESS ANALYTICS</h6>
      </div>
      <h3>Transform your business with data-driven insight. Harness your social power with in-depth knowledge.</h3>
      <div className={styles.offerAnimationFeatures}>
      <div className={styles.offerFeaturesContent}>
              <div  className={styles.offerFeaturesImgShadows}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (8).png" fill/>
                </div>
              </div>
              <p>Understand past performance through detailed analysis of historical data.</p>
            </div>
            <div className={styles.offerFeaturesContent}>
              <div  className={styles.offerFeaturesImgShadows}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (8).png" fill/>
                </div>
              </div>
              <p>Provide data-driven recommendations to support strategic business decisions.</p>
            </div>
            </div>
            <div className={styles.OfferAnimationImageBoxContainer}>
              <div className={styles.OfferAnimationImageBoxContent}>
                <div className={styles.ImageBox}>
                  <Image src="/about.png" fill/>
                </div>
              </div>
              <div className={styles.OfferAnimationImageBoxContent}>
                <div className={styles.ImageBox}>
                  <Image src="/Hero Image.png" fill/>
                </div>
              </div>
            </div>
    </div>
    </div>
  </section>;
};

export default OfferAnimation;
