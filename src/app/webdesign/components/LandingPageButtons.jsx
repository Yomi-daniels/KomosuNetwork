import webstyle from "../webdesign.module.css";
import Image from "next/image";
const LandingPageButtons = () => {
  return (
    <div className={webstyle.buttonContainer}>
      <button>See Pricing</button>
      <button>
        Get Demo
        <div className={webstyle.butttonBlue}>
          <div className={webstyle.buttonImg}>
            <Image src="/Vector.png" fill />
          </div>
        </div>
      </button>
    </div>
  );
};

export default LandingPageButtons;
