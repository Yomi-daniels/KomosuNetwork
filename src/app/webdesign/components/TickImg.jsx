import styles from "../../../sections/sections.module.css";
import Image from "next/image";

const TickImg = () => {
  return (
    <div className={styles.offerFeaturesImgShadow}>
      <div className={styles.offerFeaturesImg}>
        <Image src="/Vector (6).png" alt="offerAnimImg" fill />
      </div>
    </div>
  );
};

export default TickImg;
