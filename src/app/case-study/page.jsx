"use client";
import casestyles from "./casestudy.module.css";
import CaseStudyHeader from "./casestudyheader/CaseStudyHeader";
import DigitalTransformationSection from "./digital transformation/DigitalTransformationSection";
const CaseStudyPage = () => {
  return (
    <section className={casestyles.CaseStudyPage}>
      <CaseStudyHeader />
      <DigitalTransformationSection />
    </section>
  );
};

export default CaseStudyPage;
