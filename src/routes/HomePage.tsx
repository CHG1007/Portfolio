import Hero from "../components/home/Hero";
import About from "../components/home/About";
import ExperienceTimeline from "../components/home/ExperienceTimeline";
import Skills from "../components/home/Skills";
import ProjectGrid from "../components/home/ProjectGrid";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Home sections */}
      <Hero />
      <About />
      <ExperienceTimeline />
      <Skills />
      <ProjectGrid />
    </div>
  );
}
