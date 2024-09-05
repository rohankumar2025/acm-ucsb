import Navbar from "../components/shared/Navbar/Navbar";
import Hero from "../components/landing/Hero";
import AboutBlurb from "../components/body/AboutBlurb";
import Branches from "../components/body/Branches";
import EventsSection from "../components/body/EventsSection/EventsSection";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
        <Hero />
        <AboutBlurb />
        <Branches />
        <EventsSection />
      </div>
    </main>
  );
};
