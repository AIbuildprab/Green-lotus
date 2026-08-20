import CallToAction from "../components/sections/CallToAction.jsx";
import Hero from "../components/sections/Hero.jsx";
import Process from "../components/sections/Process.jsx";
import ProjectStories from "../components/sections/ProjectStories.jsx";
import ServiceAreaNote from "../components/sections/ServiceAreaNote.jsx";
import ServicesOverview from "../components/sections/ServicesOverview.jsx";
import TestimonialsStrip from "../components/sections/TestimonialsStrip.jsx";
import TrustBar from "../components/sections/TrustBar.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <ProjectStories />
      <TestimonialsStrip />
      <Process />
      <ServiceAreaNote />
      <CallToAction headingLevel="h3" />
    </>
  );
}
