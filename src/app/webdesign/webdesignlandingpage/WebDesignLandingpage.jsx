import webstyle from "../webdesign.module.css";
import Image from "next/image";
const WebDesignLandingpage = () => {
  return (
    <section className={webstyle.webdesignLandingPage}>
    <div className={webstyle.vectorImagetop}>
        <Image src="/webdesign vector.png"  fill/>
    </div>
      <div className={webstyle.webdesignLandingPageContainer}>
        <div className={webstyle.webdesignTextContainer}>
            <div className={webstyle.headerContent}>
                <div className={webstyle.headerimg}>
                    <Image src="/Vector (5).png" fill/>
                </div>
                <h4>WEB DESIGN</h4>
            </div>
            <h1>Drive your automotive company forward with innovative and stunning web design</h1>
            <div className={webstyle.buttonContainer}>
                <button>See Pricing</button>
                <button>
                Get Demo
                    <div className={webstyle.butttonBlue}>
                        <div className={webstyle.buttonImg}>
                            <Image src="/Vector.png" fill/>
                        </div>
                    </div>
                </button>
            </div>
        </div>
        <div className={webstyle.webdesignImageContainer}>
            <div className={webstyle.webimage}>
                <Image src="/Frame 126.png" fill/>
            </div>
            <div className={webstyle.webimage2}>
                <Image src="/New Macbook Pro Mockup Front View.png" fill/>
            </div>
        </div>
      </div>
      <div className={webstyle.vectorImagebottom}>
        <Image src="/webdesign vector.png"  fill/>
    </div>
    </section>
  );
};

export default WebDesignLandingpage;
