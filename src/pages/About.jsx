import AboutSection1 from "../components/about-components/AboutSection1";
import AboutSection2 from "../components/about-components/AboutSection2";
import AboutSection3 from "../components/about-components/AboutSection3";
import MissionVision from "../components/about-components/MissionVision";

function AboutPage() {
  return (
    <>
      <AboutSection1 />
      <AboutSection2 />
      {/* <AboutSection3 /> */}
      <MissionVision />
    </>
  );
}

export default AboutPage;