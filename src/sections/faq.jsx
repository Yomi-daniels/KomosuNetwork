import styles from "./sections.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";
const shadow_Font = Shadows_Into_Light ({
  subsets : ['latin'],
  weight : ['400']
})
const FAQ = () => {
  return <section className={styles.FAQSection}>
  <div className={styles.FAQHeaderContents}>
  <div className={styles.servicesSubTextContainer}>
        <div className={styles.blueBorder}></div>
        <p className={styles.servicesSubText}>FAQs</p>
      </div>
  <h2> Got <span className={`${styles.servicesSpan} ${shadow_Font.className}`}>Questions?</span> we have the answers right<span className={`${styles.servicesSpan} ${shadow_Font.className}`}> Here</span></h2>
  </div>
    <div className={styles.FAQContainer}>
      <div className={styles.FAQContents}>
        <h4>What Service Does Komosu Offer?</h4>
        <div className={styles.dropdownImg}>
          <Image src="/Frame 39.png" fill/>
        </div>
      </div>
      <div className={styles.FAQContents}>
        <h4>What Service Does Komosu Offer?</h4>
        <div className={styles.dropdownImg}>
          <Image src="/Frame 39.png" fill/>
        </div>
      </div>
      <div className={styles.FAQContents}>
        <h4>What Service Does Komosu Offer?</h4>
        <div className={styles.dropdownImg}>
          <Image src="/Frame 39.png" fill/>
        </div>
      </div>
    </div>
  </section>;
};

export default FAQ;
