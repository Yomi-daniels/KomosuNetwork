"use client";
import casestyles from "./casestudy.module.css";
import CaseStudyHeader from "./caseStudyHeader/CaseStudyHeader";
import DigitalTransformationSection from "./digitalTransformation/DigitalTransformationSection";
const CaseStudyPage = () => {
  return (
    <section className={casestyles.CaseStudyPage}>
      <CaseStudyHeader />
      <DigitalTransformationSection />
    </section>
  );
};

export default CaseStudyPage;
