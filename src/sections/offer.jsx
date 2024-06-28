"use client"
import styles from "./sections.module.css";
import React, { useState } from 'react';
import Image from "next/image";
import { Shadows_Into_Light } from "next/font/google";

const shadowFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const Offer = () => {
  const [activeSection, setActiveSection] = useState('webDesign');
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  return (
    <section className={styles.OfferSection}>
      <h2 className={styles.offerHeader}>
        WHAT WE OFFER OUR{" "}
        <span className={`${styles.servicesSpan} ${shadowFont.className}`}>
          CLIENTS
        </span>
      </h2>
      <div className={styles.offerContainer}>
      <div className={styles.offerSelectProps}>
        <li
          className={activeSection === 'webDesign' ? styles.active : ''}
          onClick={() => handleSectionClick('webDesign')}
        >
          Web Design
        </li>
        <li
          className={activeSection === 'aiSolutions' ? styles.active : ''}
          onClick={() => handleSectionClick('aiSolutions')}
        >
          AI Solutions
        </li>
        <li
          className={activeSection === 'contentMarketing' ? styles.active : ''}
          onClick={() => handleSectionClick('contentMarketing')}
        >
          Content Marketing
        </li>
        <li
          className={activeSection === 'leadGeneration' ? styles.active : ''}
          onClick={() => handleSectionClick('leadGeneration')}
        >
          Lead Generation
        </li>
      </div>

        <div className={styles.OfferOfferContentContainer}>
        {activeSection === 'webDesign' && (
          <div className={styles.webDesignContainer}>
            <div className={styles.webDesignContent}>
              <div className={styles.webDesignHeader}>
                <div className={styles.webHeaderImgBg}>
                  <div className={styles.webHeaderImg}>
                    <Image src="/Vector (13).png" alt="offerImage" fill />
                  </div>
                </div>
                <h5>WEB DESIGN</h5>
              </div>
              <h1 className={styles.webDesignh1}>
                Drive your automotive company forward with innovative and stunning
                web design
              </h1>
              <div className={styles.WebDesignBtn}>
                <button className={styles.WebDesignBtn1}>See Pricing</button>
                <button className={styles.WebDesignBtn2}>
                  Get Demo
                  <div className={styles.RoundBgCOlor}>
                    <div className={styles.WebBtnImg}>
                    <Image src="/Vector.png" alt="vector" fill/>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.WebDesignFeatures}>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                    Tailored website designs that reflect your brand's identity
                    and values.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                    Secure and efficient online booking and purchasing systems.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                    Comprehensive SEO strategies to improve search engine
                    rankings.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                    Integration with CRM systems for better customer relationship
                    management.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>Virtual showrooms to display your vehicle lineup.</p>
                </div>
              </div>
            </div>

            <div className={styles.webDesignCard}>
              <Image src="/Image (3).png" fill />
            </div>
          </div>
          )}
          {activeSection === 'aiSolutions' && (
          <div className={`${styles.webDesignContainer} ${styles.aiSolution}`}>
            <div className={styles.webDesignContent}>
              <div className={styles.webDesignHeader}>
                <div className={styles.webHeaderImgBg}>
                  <div className={styles.webHeaderImg}>
                    <Image src="/Vector (14).png" alt="offerImage" fill />
                  </div>
                </div>
                <h5>AI SOLUTIONS</h5>
              </div>
              <h1 className={styles.webDesignh1}>
              Accelerate your business with auto-pilot efficiency sponsored by our AI-powered Chatbot
              </h1>
              <div className={styles.WebDesignBtn}>
                <button className={styles.WebDesignBtn1}>See Pricing</button>
                <button className={styles.WebDesignBtn2}>
                  Get Demo
                  <div className={styles.RoundBgCOlor}>
                    <div className={styles.WebBtnImg}>
                    <Image src="/Vector.png" alt="vector" fill/>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.WebDesignFeatures}>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                  24/7 Customer Support. Provide immediate answers to customer queries, improving satisfaction and engagement.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                  Automatically qualify leads by asking pre-set questions and directing them to the appropriate sales representatives.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                  Facilitate easy scheduling of maintenance and service appointments.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                  Inform customers about ongoing promotions, discounts, and special events.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>Provide real-time assistance on your dealership’s website.</p>
                </div>
              </div>
            </div>
            <div className={styles.webDesignCard}>
              <Image src="/Image (4).png" fill />
            </div>
          </div>
          )}
          {activeSection === 'contentMarketing' && (
          <div className={`${styles.webDesignContainer} ${styles.contentMarketing}`}>
            <div className={styles.webDesignContent}>
              <div className={styles.webDesignHeader}>
                <div className={styles.webHeaderImgBg}>
                  <div className={styles.webHeaderImg}>
                    <Image src="/Vector (5).png" alt="offerImage" fill />
                  </div>
                </div>
                <h5>CONTENT MARKETING</h5>
              </div>
              <h1 className={styles.webDesignh1}>
              Fuel your brand success with tailored content marketing services championed by us
              </h1>
              <div className={styles.WebDesignBtn}>
                <button className={styles.WebDesignBtn1}>See Pricing</button>
                <button className={styles.WebDesignBtn2}>
                  Get Demo
                  <div className={styles.RoundBgCOlor}>
                    <div className={styles.WebBtnImg}>
                    <Image src="/Vector.png" alt="vector" fill/>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.WebDesignFeatures}>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                  Develop engaging promotional videos tailored to help captivate your audience and drive sales.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                  Provide valuable insights and guides to your clients through blogs writing, maintenance tips on your websites or platforms.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                  Design and distribute regular newsletters with updates, promotions, and valuable content.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                  Continuously refine your content strategy based on data-driven insights.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>Virtual showrooms to display your vehicle lineup.</p>
                </div>
              </div>
            </div>
            <div className={styles.webDesignCard}>
              <Image src="/Images (1).png" fill />
            </div>
          </div>
          )}
          {activeSection === 'leadGeneration' && (
          <div className={`${styles.webDesignContainer} ${styles.leadGeneration}`}>
            <div className={styles.webDesignContent}>
              <div className={styles.webDesignHeader}>
                <div className={styles.webHeaderImgBg}>
                  <div className={styles.webHeaderImg}>
                    <Image src="/Vector (5).png" alt="offerImage" fill />
                  </div>
                </div>
                <h5>LEAD GENERATION</h5>
              </div>
              <h1 className={styles.webDesignh1}>
              Drive more leads and transform your dealership growth with our expert solutions
              </h1>
              <div className={styles.WebDesignBtn}>
                <button className={styles.WebDesignBtn1}>See Pricing</button>
                <button className={styles.WebDesignBtn2}>
                  Get Demo
                  <div className={styles.RoundBgCOlor}>
                    <div className={styles.WebBtnImg}>
                    <Image src="/Vector.png" alt="vector" fill/>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.WebDesignFeatures}>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                  Use targeted advertising campaigns through the use of relevant Ads to target what potential customers are looking for.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                  Improve your website’s ranking on search engines to attract organic traffic.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                  Send regular updates, promotions, and valuable content to your subscriber list.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>
                  Deliver targeted offers based on customer preferences and behavior.
                  </p>
                </div>
                <div className={styles.WebDesignFeaturesContent}>
                  <div className={styles.webFeaturesImgShadow}>
                    <div className={styles.webFeaturesImg}>
                      <Image src="/Vector (6).png" alt="offerImage" fill />
                    </div>
                  </div>
                  <p>Seamlessly integrate our AI with your CRM system to manage and track leads.</p>
                </div>
              </div>
            </div>
            <div className={styles.webDesignCard}>
              <Image src="/Image (5).png" fill />
            </div>
          </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Offer;
