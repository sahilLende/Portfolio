"use client";
import Image from "next/image";
import heaxgon from "public/Hexagon.svg";
import { BoltIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
const techStack = [
  { src: "js.svg", name: "JavaScript" },
  { src: "java.svg", name: "Java" },
  { src: "typescript.svg", name: "TypeScript" },
  { src: "nodejs.svg", name: "Node.js" },
  { src: "reactjs.svg", name: "React" },
  { src: "nextjs.svg", name: "Next.js" },
  { src: "html5.svg", name: "HTML" },
  { src: "css3.svg", name: "CSS" },
  { src: "tailwind.svg", name: "Tailwind CSS" },
  { src: "bootstrap5.svg", name: "Bootstrap" },
  { src: "mongodb.svg", name: "MongoDB" },
  { src: "postgresql.svg", name: "PostgreSQL" },
  { src: "git.svg", name: "Git" },
  { src: "github.svg", name: "GitHub" },
  { src: "vitejs.svg", name: "Vite" },
  { src: "redux.svg", name: "Redux" },
  // Add more objects as needed
];
const social = [
  { src: "twitter.svg", name: "JavaScript" },
  { src: "java.svg", name: "Java" },
  { src: "typescript.svg", name: "TypeScript" },
  { src: "nodejs.svg", name: "Node.js" },
  { src: "reactjs.svg", name: "React" },
];
import Link from "next/link";

const Hero = () => {
  const heroRef = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      let timeline = gsap.timeline({});

      gsap.set("#hero-extra li", {
        autoAlpha: 0,
        yPercent: 100,
      });
      gsap.to("#hero-extra li", {
        stagger: 0.1,
        autoAlpha: 1,
        yPercent: 0,
      });

      timeline
        .to("#sub-heading-a", {
          autoAlpha: 1,
          yPercent: 100,
          duration: 0.7,
          ease: "back",
        })
        .set(
          "#sub-heading-a",
          {
            autoAlpha: 0,
            yPercent: -100,
            ease: "back",
          },
          "+=1",
        )
        .to(
          "#sub-heading-b",
          {
            autoAlpha: 1,
            yPercent: 100,
            duration: 0.7,
            ease: "back",
          },
          "<",
        )
        .set(
          "#sub-heading-b",
          {
            autoAlpha: 0,
            yPercent: -100,
            ease: "back",
          },
          "+=1",
        )
        .repeat(-1);
    },
    [],
    heroRef,
  );
  return (
    <div
      id="hero-container"
      ref={heroRef}
      className="relative flex  h-screen min-w-[280px] flex-col  items-center justify-center   md:flex-row landscape-phone:h-[650px] "
    >
      {/* hero background */}
      <Image
        id="hero-background"
        src={heaxgon}
        alt="bg-hexagon"
        className="absolute left-0 top-0 z-0 object-cover opacity-[0.12] "
        fill={true}
      />
      {/*  section  1 */}
      <section
        id="hero-heading"
        className="z-10 mt-4  w-full whitespace-nowrap text-center    md:mt-0"
      >
        <h1 id="heading" className="hero-heading ">
          Sahil Lende
        </h1>

        <h2
          id="sub-heading"
          className="hero-subHeading mb-4  overflow-hidden p-3 "
        >
          <span className="relative border ">
            <span
              id="sub-heading-a"
              className="primary-gradient invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[150%] bg-clip-text  text-transparent "
            >
              Full-Stack Dev.
            </span>
            <span
              id="sub-heading-b"
              className="secondary-gradient invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[150%] bg-clip-text text-transparent"
            >
              Computer Science Er.
            </span>
          </span>
        </h2>

        <div id="hero-action" className=" flex justify-center gap-2">
          {/*  <button
            id="primary-call"
            className=" call-to-action primary-gradient  h-10 w-[30%] "
          >
            Contact
          </button> */}

          <Link
            href="projects"
            className="  w-[30%] transition-transform duration-300  hover:scale-105"
          >
            <button
              id="secondary-call"
              className="primary-gradient call-to-action w-ful  h-10  p-0.5 "
            >
              <p className="rounded-md bg-white  p-2">Projects</p>
            </button>
          </Link>
        </div>
        <div className="mt-3 flex w-full  flex-row items-center justify-center gap-2">
          <a href="https://github.com/sahilLende">
            <Image
              src="socialsgit.svg"
              alt="twitter"
              className="h-6 w-6"
              width={42}
              height={42}
            />
          </a>
          <a href="https://www.linkedin.com/in/sahil-lende-7023191b2/">
            <Image
              src="socialsLink.svg"
              alt="twitter"
              className="h-6 w-6"
              width={42}
              height={42}
            />
          </a>
          <a href="https://twitter.com/SahilLende10">
            <Image
              src="socialstwitter.svg"
              alt="twitter"
              className="h-6 w-6"
              width={42}
              height={42}
            />
          </a>
        </div>
      </section>
      {/* hero-section2 */}
      <section
        id="hero-extra"
        className="  z-10 mx-8  mt-32 min-h-max   w-[85%] rounded-lg  border-2 bg-white  shadow-2xl md:mt-0  "
      >
        {/* only show on md and smaller scrren give option to switch it */}

        <h3 className="h6 relative mx-auto mb-2  mt-4 whitespace-nowrap  text-center  ">
          Tech tools I'm using
          <Image
            src="code.svg"
            className="absolute bottom-full left-1/2 h-16 w-16 -translate-x-1/2"
            alt="code"
            width={40}
            height={40}
          />
          <BoltIcon className="ml-1 inline h-5 w-5  text-yellow-400" />
        </h3>
        <div className=" overflow-hidden ">
          <ul className="grid h-full   w-full auto-rows-max grid-cols-4 ">
            {techStack.map((tech) => (
              <li
                onMouseEnter={(e) => {
                  const hover = contextSafe(() => {
                    gsap.to(e.currentTarget, {
                      scale: 1.1,
                      duration: 0.3,
                      ease: "back",
                    });
                  });
                  hover();
                }}
                onMouseLeave={(e) => {
                  const hover = contextSafe(() => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      duration: 0.3,
                      ease: "back",
                    });
                  });
                  hover();
                }}
                key={tech.name}
                className=" m-2 flex flex-col items-center justify-center   "
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={62}
                  height={62}
                  className="h-8 w-8 lg:h-11 lg:w-11 landscape-phone:h-8 landscape-phone:w-8"
                />
                <p className=" hidden  text-xs   sm:block    landscape-phone:hidden">
                  {tech.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Hero;

/*
 */
