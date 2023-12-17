"use client";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import {
  LightBulbIcon,
  XCircleIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  useLayoutEffect,
  useState,
  useRef,
  useReducer,
  useEffect,
} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navlinks from "./Navlinks";

const menuLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/snippets",
    name: "Snippets",
  },
  {
    href: "/visitorsbook",
    name: "Visitors Book",
  },
];

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const navTl = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      const altMenu = document.getElementById("alt-menu");
      if (altMenu) {
        navTl.current = gsap.timeline();
        navTl.current
          .from(altMenu, {
            yPercent: -100,
            autoAlpha: 0,
            duration: 0.4,
            ease: "back.inOut",
          })
          .from(
            "#alt-menu .navlink-text",
            { yPercent: -100, duration: 0.5, ease: "bounce" },
            "-=0.3",
          );
      }
    },
    [showMenu],
    navRef,
  );
  useEffect(() => {
    if (showMenu) onAltMenuClose();
  }, [pathname]);

  const onAltMenuClose = contextSafe(() => {
    gsap.to("#alt-menu", {
      onComplete: () => {
        setShowMenu(false);
      },
      yPercent: -100,
      autoAlpha: 0,
      duration: 0.18,
      ease: "back.inOut",
    });
  });

  return (
    <header className=" fixed  z-[99] w-full bg-black  text-xs  2xl:w-inherit ">
      <nav ref={navRef} className="h-full w-full bg-white  shadow-md ">
        <div className="w-full px-8  ">
          <div className="flex h-16 items-center justify-between">
            <LightBulbIcon className="shadow-[3px 0px 15px #ffff00] h-6  w-6 transition-transform duration-200 hover:scale-110 " />
            <ul className=" ml-10  hidden items-baseline space-x-4 md:flex">
              <Navlinks menuLinks={menuLinks} pathname={pathname} />
            </ul>
            {showMenu && (
              <SmallMenu
                pathname={pathname}
                menuLinks={menuLinks}
                onAltMenuClose={onAltMenuClose}
              />
            )}
            <Bars3BottomRightIcon
              id="bars"
              className="h-6 w-6 md:hidden md:h-8 md:w-8"
              onClick={(e) => {
                showMenu ? onAltMenuClose() : setShowMenu(true);
              }}
            />
            <BarsArrowUpIcon
              id="open-bars"
              className="hidden h-6 w-6 md:h-8 md:w-8"
              onClick={(e) => {
                showMenu ? onAltMenuClose() : setShowMenu(true);
              }}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

const SmallMenu = ({ pathname, menuLinks, onAltMenuClose }) => {
  return (
    <div
      id="alt-menu"
      className=" absolute right-4 top-[110%] min-h-[50vh]  w-3/4  rounded-md border  bg-white p-2  shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]    sm:w-1/2  md:hidden  "
    >
      <div className="flex flex-row-reverse gap-2 p-2">
        <XCircleIcon
          id="cancleIcon"
          onClick={(e) => onAltMenuClose()}
          className="h-6 w-6 transition-all duration-300 hover:scale-x-105 hover:stroke-red-800 md:hidden md:h-8 md:w-8 "
        />
      </div>
      <div className="flex flex-col ">
        <Navlinks menuLinks={menuLinks} pathname={pathname} />
      </div>
    </div>
  );
};

export default Navigation;
