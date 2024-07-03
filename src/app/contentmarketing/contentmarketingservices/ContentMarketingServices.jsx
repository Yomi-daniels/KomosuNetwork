import contentStyles from "../contentmarketing.module.css";
import Image from "next/image";
import GetStarted from "@/app/webdesign/components/GetStarted";

const ContentMarketingServices = () => {
  return (
    <section className={contentStyles.contentservicessection}>
      <div className={contentStyles.contentservicescontainer}>
        <div className={contentStyles.contentservicecontent}>
          <div className={contentStyles.contentServiceText}>
            <h3>Develop engaging promotional videos tailored to help captivate your audience and drive sales. </h3>
            <GetStarted/>
                    </div>
                    <div className={contentStyles.contentservicesImg}>
                      <Image src="/Group 6324.png" fill objectFit="contain"/>
                    </div>
          </div>
          <div className={contentStyles.contentservicecontent}>
        
                    <div className={`${contentStyles.contentservicesImg} ${contentStyles.contentservicesImg2}`}>
                      <Image src="/email-concept-with-world-envelope 1.png" fill objectFit="contain"/>
                    </div>
                    <div className={contentStyles.contentServiceText}>
            <h3> Design and distribute regular newsletters with updates, promotions, and valuable content. </h3>
            <GetStarted/>
                    </div>
          </div>
      </div>
    </section>
  );
};

export default ContentMarketingServices;
