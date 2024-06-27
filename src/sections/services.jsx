import Image from "next/image";
import styles from "./sections.module.css";
import { Shadows_Into_Light } from "next/font/google";

const shadows = Shadows_Into_Light ({
  subsets: ["latin"],
    weight: ["400"]
})
const Services = () => {
  return <section className={styles.serviceSection}>
    <div className={styles.ServicesTextContainer}>
      <div className={styles.servicesSubTextContainer}>
        <div className={styles.blueBorder}></div>
        <p className={styles.servicesSubText}>WHY KOMOSU?</p>
      </div>
      <div className={styles.servicesHeader}>
        <h2> WE GIVE YOUR <span className={`${styles.servicesSpan} ${shadows.className}`}>BUSINESS</span> THE PUSH IT NEEDS</h2>
      </div>
      <p className={styles.subContent}>Komosu Network is committed to revolutionizing the automotive industry by providing innovative solutions. our dedicated team of experts focuses on building strong relationships with clients, ensuring that they have more time to concentrate on what truly matters to them. </p>
    </div>
    <div className={styles.servicesContainer}>
      <div className={styles.servicesContainerContent}>
        <div className={styles.containerflex}>
          <div className={styles.containerFlex1}>
            <div className={styles.flexImg}>
              <Image src="/Vector (1).png" alt="flexImage" fill/>
            </div>
            <h5 className={styles.containerFlexh5}>Web Design</h5>
            <p className={styles.containerFlexp}>We revolutionize web design for dealerships. blending innovative techniques with strategic planning to elevate online presence and drive sales.</p>
            <div className={styles.flexabsoluteImg}>
              <div className={styles.flexImgAbsolute}>
                <Image src="/Rectangle 21.png" fill/>
              </div>
            </div>
            <div className={styles.flexabsoluteImg2}>
              <div className={styles.flexImgAbsolute2}>
                <Image src="/Rectangle 19.png" fill/>
              </div>
            </div>
          </div>
          <div className={styles.containerFlex1}>
          <div className={styles.flexImg}>
              <Image src="/Vector (2).png" alt="flexImage" fill/>
            </div>
            <h5 className={styles.containerFlexh5}>Virtual Finance Managers</h5>
            <p className={styles.containerFlexp}>We help eliminate paper-works and streamline processes with our chatbot, acting as financial managers helping simplify the financial journey.</p>
          
         
          </div>
        </div>
        <div className={styles.containerSubFlex}>
        <div className={styles.containerSubFlex1}>
            <div className={styles.flexImg}>
              <Image src="/Vector (3).png" alt="flexImage" fill/>
            </div>
            <h5 className={styles.containerFlexh5}>Sales & Appointment Assistants</h5>
            <p className={styles.containerFlexp}>Komosu Network innovates lead generation for dealerships, combining content marketing and chatbot to boost sales and conversions.</p>
           
            <div className={styles.flexabsoluteImg2}>
              <div className={styles.flexImgAbsolute2}>
                <Image src="/Rectangle 19 (1).png" fill/>
              </div>
            </div>
          </div>

        <div className={styles.containerSubFlex1}>
          <div className={styles.flexImg}>
              <Image src="/Vector (4).png" alt="flexImage" fill/>
            </div>
            <h5 className={styles.containerFlexh5}>Content that converts</h5>
            <p className={styles.containerFlexp}>Komosu Network transforms content marketing for dealership, merging innovative tactics with targeted campaigns to enhance car sales and optimize ad spending.</p>
          
         
          </div>

        </div>
      </div>
    </div>
    <div className={styles.servicesLastContentText}>
      <p>Learn more about Komosu</p>
      <div className={styles.buttonImageBg}>
          <div className={styles.buttonImage}>
            <Image src="/Vector.png" alt="vector" fill/>
          </div>
        </div>
    </div>
  </section>;
};

export default Services;
