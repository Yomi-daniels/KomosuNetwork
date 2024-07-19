import Aistyles from "./Aisolution.module.css";
import AiLandingpage from "./aisolutionlandingpage/AiLandingpage.tsx";
import AisolutionServices from "./aisolutionservices/AisolutionServices.tsx";
import Aipricing from "./aisolutionpricing/Aipricing.tsx";

const Aisolution = () => {
  return (
    <section className={Aistyles.AiSolutionSection}>
      <AiLandingpage />
      <AisolutionServices />
      <Aipricing />
    </section>
  );
};

export default Aisolution;
