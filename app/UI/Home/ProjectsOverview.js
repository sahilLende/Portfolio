import ProjectCard from "../Components/ProjectCard";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import { projects } from "@/app/lib/constants";

const ProjectsOverview = () => {
  return (
    <div
      id="overview-container"
      className=" relative flex min-h-full  min-w-[280px] flex-col   "
    >
      <div className=" secondary-gradient  absolute   left-1/2 h-1/4  w-full -translate-x-1/2  rounded-b-md   md:h-1/3 " />
      <h1 className="h1 z-10 my-10 w-full  px-2 text-center  text-white md:my-16">
        Checkout My Projects
      </h1>
      <div className=" z-10  m-4 mx-auto  grid h-max  flex-1 auto-rows-[minmax(0px,_20rem)] grid-cols-[minmax(0px,_24rem)]  gap-6  px-5 md:grid-cols-[minmax(0px,_24rem)_minmax(0px,_24rem)] ">
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
      <button className="secondary-gradient mx-auto my-10  w-max rounded-md   p-3   text-base  font-bold text-white  ">
        More Projects{" "}
        <ArrowLongRightIcon className="inline-block h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default ProjectsOverview;
