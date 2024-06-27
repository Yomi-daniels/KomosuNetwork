import styles from "./sections.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";
const shadows_Font = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400']
})
const Testimonials = () => {
  return <section className={styles.tesimonialSection}>
   <h2 className={styles.offerHeader}>HEAR WHAT OUR <span className={`${styles.offerSpan} ${shadows_Font.className}`}>CLIENTS  </span>SAY ABOUT US</h2>
    <div className={styles.tesimonialContainer}>
    <div className={styles.tesimonialContents}>
      <div className={styles.avatar}>
        <Image src="/Subtract (1).png" fill/>
      </div>
      <div className={styles.testimonialTextContent}>
        <h2 className={styles.clientCompany}>Jeep</h2>
        <p className={styles.feedbacks}>"The team at Komosu Sales is incredibly knowledgeable and dedicated. Their real-time analytics and reporting tools have given us a deeper understanding of our sales performance and customer behavior. This has enabled us to make smarter, data-driven decisions, resulting in a noticeable boost in sales."</p>
        <p className={styles.testifierName}>David Allen</p>
        <p className={styles.role}>MD. Jeep</p>
      </div>
    </div>
    <div className={styles.groupImg}>
      <Image src="/triangle.png" fill/>
    </div>
    </div>
    <div className={styles.testimonialbuttonDirection}>
      <div className={styles.btnprev}>
        <Image src="/View plan button.png" fill/>
      </div>
      <div className={styles.btnNext}>    
       <Image src="/View plan button (1).png" fill/></div>
    </div>
  </section>;
};

export default Testimonials;
