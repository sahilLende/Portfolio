import React from "react";
import ProjectsOverview from "../UI/Home/ProjectsOverview";
import { projects } from "../lib/constants";
import ProjectCard from "../UI/Components/ProjectCard";
import Contact from "../UI/Home/Contact";
const Projects = () => {
  return (
    <>
      <section id="projects-catalouge" className=" m-4 mt-6  border-b-2 ">
        <div className="mb-10">
          <h1 className="h1 mb-4">Projects </h1>
          <p className=" mb-2 font-inter italic">
            Each project represents a step in my learning journey, where I've
            applied my growing skills in both front-end and back-end
            development. Explore below to see the progress and enthusiasm I
            bring to my work." ️🚀
          </p>
        </div>

        <div className=" mx-auto grid h-max  auto-rows-[minmax(0px,_20rem)]  grid-cols-[minmax(0px,_24rem)] gap-6     md:w-max  md:grid-cols-[minmax(0px,_24rem)_minmax(0px,_24rem)] ">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              hrefs={project.hrefs}
              title={project.title}
              description={project.description}
              tags={project.tags}
              borderType="primary"
            />
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Projects;
