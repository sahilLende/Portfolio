import Hero from "./UI/Home/Hero";
import { Suspense } from "react";
import Loading from "./loading";
import ProjectsOverview from "./UI/Home/ProjectsOverview";
import AboutOverview from "./UI/Home/AboutOverview";
import Contact from "./UI/Home/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsOverview />
      <AboutOverview />
      <Contact />
    </>
  );
}
