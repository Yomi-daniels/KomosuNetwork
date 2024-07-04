import leadStyles from "../leadgeneration.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
const LeadgenLandingpage = () => {
  return (
    <section className={leadStyles.LeadingGenSection}>
      <div className={leadStyles.LeadGenContainer}>
      {/* <div className={leadStyles.vectortopImg}>
        <Image src="/yellow vector.png" fill/>
      </div> */}
        <div className={leadStyles.leadGenTextContainer}>
          <div className={leadStyles.leadtextheader}>
            <div className={leadStyles.textheaderimg}>
              <Image src="/Vector (5).png" fill />
            </div>
            <h4>LEAD GENERATION</h4>
          </div>
          <h1>
            Drive more leads and transform your dealership growth with our
            expert solutions
          </h1>
          <LandingPageButtons />
        </div>
        <div className={leadStyles.leadGenaImageContainer}>
        <div className={leadStyles.leadimgstat}>
          <Image src="/Stat (4).png" fill objectFit="contain"/>
        </div>
          <div className={leadStyles.leadmanImg}>
            <Image src="/leadgen man.png" fill objectFit="cover"/>
          </div>
          <div className={leadStyles.leadimgstat2}>
          <Image src="/Stat (3).png" fill objectFit="contain"/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default LeadgenLandingpage;
