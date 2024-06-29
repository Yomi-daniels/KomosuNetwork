"use client";
import Navbar from "../components/navbar/Navbar";
import AboutUsLandingPage from "./aboutSections/aboutUsLandingPage";
import WhoareweSection from "./whoareWeSection/whoarewe"
import aboutstyles from "./aboutSection.module.css";
import OurvisionSection from  "./ourVisionSection/ourvision";
import VideoShowcase from "@/sections/videoShowcase";
import OurSolutionSection from "./ourSolutionSection/ourSolution";
import Servicesflex from "@/sections/servicesflex";
import MeetOurTeam from "./meetOurTeamSection/meetOurTeam";

const AboutPage = () => {
  return <section className={aboutstyles.aboutUsLandingPage}>
 <Navbar/>
    <AboutUsLandingPage/>
    <WhoareweSection/>
    <OurvisionSection/>
    <VideoShowcase/>
    <OurSolutionSection/>
   <Servicesflex/>
   <MeetOurTeam/>
  </section>
};

export default AboutPage;
