import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
const AboutOverview = () => {
  return (
    <section className="md:gap-50  m-4 mt-6 flex  flex-col  justify-between gap-5   rounded-md border-2   md:flex-row  ">
      <div className=" relative  flex items-center border  md:flex-1  ">
        <Image
          id="hero-background"
          src="Hexagon2.svg"
          alt="bg-hexagon"
          className="absolute left-0 top-0 z-0 h-full w-full object-cover opacity-[0.25] "
          fill
        />
        <div className=" relative mx-auto my-5 h-44  w-44 md:my-auto  ">
          <div className=" secondary-gradient absolute -bottom-3 -right-3 h-full w-full rotate-6 rounded-md"></div>
          <Image
            src="/sahil.jpg"
            alt="Sahil Lende"
            fill
            sizes="(min-width:300px) 11rem "
            quality={100}
            className="absolute rounded-md object-cover "
          />
        </div>
      </div>

      <div className=" rounded-md p-5 md:w-2/3 ">
        <h1 className="h1  mb-5 ">Get to know me</h1>
        <p className="body-text1 leading-relaxed antialiased ">
          Helloo!👋- I'm Sahil Lende, an aspiring Full Stack Developer,a recent
          Computer Science graduate fueled by fresh enthusiasm. Armed with my
          trusty tools like
          <span className="mx-1 underline decoration-secondaryfromGradient decoration-2 underline-offset-4">
            JavaScript, ReactJs, NextJs, Express, PostgresSQL, MongoDB
          </span>
          – a full stack developer's dream team, I am all set to dive headfirst
          into the dynamic world of technology!
        </p>
        <p className="body-text1  mt-2    leading-relaxed antialiased">
          The rapidly changing landscape of technology keeps me on my toes...
          there's always something new to learn!
          <span className=" underline  decoration-secondaryfromGradient decoration-2 underline-offset-4">
            Want me to express myself with Express.js? Absolutely! And what
            about wrangling data with Postgres and MongoDB?
          </span>
          💯 I will get it done! Count me in for any Full-Stack related roles!
        </p>
        <Link
          className=" link-hover borde-2 relative mx-auto my-7 block w-max text-center   text-lg font-semibold   after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black hover:scale-105 "
          href="about"
        >
          See more <ArrowLongRightIcon className="inline-block h-6 w-6 " />
        </Link>
      </div>
    </section>
  );
};

export default AboutOverview;
