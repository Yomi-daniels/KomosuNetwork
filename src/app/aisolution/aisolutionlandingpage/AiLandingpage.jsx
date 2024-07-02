import Aistyles from "../Aisolution.module.css"
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
const AiLandingpage = () => {
  return <section className={Aistyles.AiLandingPage}>
  <div className={Aistyles.vectorImgtop}>
    <Image src="/yellow vector.png" fill/>
  </div>
    <div className={Aistyles.ailandingpageContainer}>
        <div className={Aistyles.ailandingpageContainerTextContent}>
            <div className={Aistyles.AiLandingPageHeader}>
                <div className={Aistyles.aiheaderImg}>
                    <Image src="/ai vector.png" fill/>
                </div>
                <h4>AI SOLUTIONS</h4>
            </div>
            <h2>Accelerate your business with auto-pilot efficiency sponsored by our AI-powered Chatbot</h2>
            <LandingPageButtons/>
        </div>
        <div className={Aistyles.ailandingpageImage}>
        <div className={Aistyles.ailandingpageImagetop}>
            <Image src="/Bot.png" fill objectFit="contain"/>
        </div>
            <div className={Aistyles.aigirlImg}>
                <Image src="/Ai girl.png" fill objectFit="contain"/>
            </div>
            <div className={Aistyles.ailandingpageImagebottom}>
            <Image src="/Frame 126 (1).png" fill objectFit="contain"/>
        </div>
        </div>
    </div>
    <div className={Aistyles.vectorImgbottom}>
    <Image src="/yellow vector.png" fill/>
  </div>
  </section>;
};

export default AiLandingpage;
