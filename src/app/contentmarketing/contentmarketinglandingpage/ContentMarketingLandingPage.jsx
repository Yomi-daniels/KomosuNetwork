import contentStyles from "../contentmarketing.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
const ContentMarketingLandingPage = () => {
  return <section className={contentStyles.contentSection}>
  <div className={contentStyles.vectorbottom}>
    <Image src="/triangle.png" fill/>
  </div>
    <div className={contentStyles.contentContainer}>
        <div className={contentStyles.contentText}>
            <div className={contentStyles.contentheader}>
                <div className={contentStyles.contentheaderImg}>
                <Image src="/Vector (5).png" fill/>
                 </div>
                 <h4>CONTENT MARKETING</h4>
            </div>
            <h2>Fuel your brand success with tailored content marketing services championed by us</h2>
<LandingPageButtons/>
        </div>
        <div className={contentStyles.contentImages}>
          <div className={contentStyles.firstContentImage}>
            <div className={contentStyles.contentImg}>
              <Image src="/Group 6.png" fill objectFit="contain"/>
            </div>
             <div className={contentStyles.contentImg2}>
              <Image src="/Group 6324.png" fill objectFit="contain"/>
            </div>
          </div>
          <div className={contentStyles.secondContentImage}>
            <div className={contentStyles.contentImg}>
              <Image src="/Rectangle 8 (3).png" fill objectFit="contain"/>
            </div>
             <div className={contentStyles.contentImg2}>
              <Image src="/Frame 139.png" fill objectFit="contain"/>
            </div>
          </div>
        </div>
    </div>
    <div className={contentStyles.vectorbottomright}>
    <Image src="/triangle.png" fill/>
  </div>
  </section>;
};

export default ContentMarketingLandingPage;
