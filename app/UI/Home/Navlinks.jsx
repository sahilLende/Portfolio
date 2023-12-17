import Link from "next/link";
import clsx from "clsx";

const Navlinks = ({ menuLinks, pathname }) => {
  return (
    <>
      {menuLinks.map((link) => (
        <Link
          key={link.href}
          className={clsx(
            "navlink-text relative  m-3  max-w-[100px] text-base font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black ",
            pathname !== link.href && "link-hover",
          )}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navlinks;
