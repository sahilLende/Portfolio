"use client";
import React from "react";
import GradientBorder from "./GradientBorder";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ hrefs, title, description, icon, tags, borderType }) => {
  return (
    <div className=" ">
      <GradientBorder type={borderType}>
        <div className=" flex h-full flex-col rounded-md bg-white  p-4 ">
          <div className=" flex justify-between">
            <h5 className="text-blue-gray-900 font mb-2 block font-lexend text-xl font-semibold leading-snug tracking-normal antialiased">
              {title}
            </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mb-4 h-10 w-10 text-gray-900"
            >
              <path
                fillRule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clipRule="evenodd"
              ></path>
              <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
            </svg>
          </div>
          <p className="body-text1 flex-1  leading-relaxed text-inherit antialiased md:text-base">
            {description}
          </p>
          <div className="flex flex-wrap pt-4 md:flex-row">
            {tags?.map((tag, idx) => (
              <p
                key={idx}
                className={`mb-2 mr-2 rounded-md bg-gray-50 px-1 text-xs italic leading-5 `}
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="w-full border py-2 text-center">
            <a
              className="navlink-text link-hover relative  m-4 max-w-[100px]  text-base font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black hover:scale-105 "
              href={hrefs.live}
            >
              Live
            </a>
            <Link
              className="navlink-text link-hover  relative m-4  max-w-[100px] text-base font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black hover:scale-105 "
              href={hrefs.readme}
            >
              Readme
            </Link>
            <a
              className="navlink-text link-hover  relative m-4  max-w-[100px] text-base font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black hover:scale-105 "
              href={hrefs.repo}
            >
              Repo
            </a>
          </div>
        </div>
      </GradientBorder>
    </div>
  );
};

export default ProjectCard;
