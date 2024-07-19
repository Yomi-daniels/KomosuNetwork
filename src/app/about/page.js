"use client";
import Navbar from "../components/navbar/Navbar";
import AboutUsLandingPage from "./aboutSections/aboutUsLandingPage.tsx";
import WhoareweSection from "./whoareWeSection/whoarewe.tsx";
import aboutstyles from "./aboutSection.module.css";
import OurvisionSection from "./ourVisionSection/ourvision.tsx";
import VideoShowcase from "../../sections/videoShowcase.tsx";
import OurSolutionSection from "./ourSolutionSection/ourSolution.tsx";
import ServicesFlex from "../../sections/servicesflex.tsx";
import MeetOurTeam from "./meetOurTeamSection/meetOurTeam.tsx";

const AboutPage = () => {
  return (
    <section className={aboutstyles.aboutUsLandingPage}>
      <Navbar />
      <AboutUsLandingPage />
      <WhoareweSection />
      <OurvisionSection />
      <VideoShowcase />
      <OurSolutionSection />
      <ServicesFlex />
      <MeetOurTeam />
    </section>
  );
};

export default AboutPage;
