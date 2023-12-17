import React from "react";
import AboutCard from "../UI/About/AboutCard";
import Contact from "../UI/Home/Contact";

const educationDetails = [
  {
    title: "BE, Computer Science and Engineering",
    subtitle: "P.R. Pote College of Engineering and Management, Amravati",
    from: "Sept. 2019",
    to: "July 2023",

    extra: [
      {
        name: "CGPA",
        text: "8.67",
      },
      {
        name: "Relevant Course work",
        text: "Object Oriented Programming,Java,Big Data Analytics,DBMS",
      },
    ],
  },
];
const responsibilites = [
  {
    title: "President, FOCI ",
    subtitle: "PRPCEM, Amravati",
    from: "June 2021",
    to: " June 2022",
    extra: [
      {
        text: "Led student council activities of the CSE Department, overseeing non-technical and technical activities.",
      },
    ],
  },
];

const courses = [
  {
    title: "Programming in Java ",
    subtitle: "NPTEL",
    from: "Jan 2021",
    to: " April 2022",
    extra: [
      {
        text: "Consolidated score-91% ",
      },
      {
        text: "Was awarded Elite +Gold Certificate.",
      },
      {
        text: "Overviewed the concepts of object-oriented programming and Java",
      },
    ],
  },
  {
    title: "Data Structures and Algo  ",
    subtitle: "GFG",
    from: "In Progress",

    extra: [
      {
        text: `Developing expertise in DSA, honing skills in sorting, string manipulation, heaps, dynamic programming, searching, trees, and various data structures, enabling efficient problem-solving and algorithmic optimization.`,
      },
    ],
  },
];
const About = () => {
  return (
    <>
      <section id="projects-catalouge" className=" m-4 mt-6  border-b-2    ">
        <div className=" mb-3 rounded-md ">
          <h1 className="h1 mb-1">About Me</h1>
          <p className=" italic ">
            <span className="font-eduQLD text-xl font-bold underline decoration-secondaryfromGradient decoration-2 underline-offset-4">
              Hello there! I'm Sahil Lende
            </span>
            , a passionate and budding full-stack developer with a solid
            foundation in computer science. My journey into the world of
            programming began with a curiosity that has evolved into a genuine
            love for creating meaningful and user-friendly applications.Thank
            you!😄 for stopping by, and feel free to reach out if you have any
            questions or if there's an exciting project you'd like to
            collaborate on!
          </p>
        </div>
        {/*  <h3 className="mb-6 text-base font-bold underline decoration-secondaryfromGradient underline-offset-2">
          Jump to
        </h3>
        <ul className="list mt-3 ">
          {["Education", "Responsibilites", "Skills", "Courses"].map(
            (text, index) => {
              return (
                <li key={index} className=" ml-3 font-medium ">
                  - <span className="  font-semibold"></span>
                  {text}
                </li>
              );
            },
          )}
        </ul> */}
      </section>
      <section className=" m-4 mt-6  ">
        <h1 className="mb-4 text-center font-lexend text-3xl font-bold ">
          Education
        </h1>
        <AboutCard data={educationDetails} />
      </section>
      <section className=" m-4 mt-6  ">
        <h1 className="mb-4 text-center font-lexend text-3xl font-bold">
          Courses
        </h1>
        <AboutCard data={courses} />
      </section>
      <section className=" m-4 mt-6  ">
        <h1 className="mb-4 text-center font-lexend text-3xl font-bold">
          Responsibilities
        </h1>
        <AboutCard data={responsibilites} />
      </section>

      <Contact />
    </>
  );
};

export default About;
