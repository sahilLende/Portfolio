import React from "react";
import clsx from "clsx";

const GradientBorder = ({ type, children }) => {
  return (
    <div
      className={clsx(
        type === "primary"
          ? "primary-gradient hover:secondary-gradient transition-all duration-500 ease-in"
          : "secondary-gradient hover:primary-gradient",
        "  h-full w-full   rounded-md p-[0.08rem] ",
      )}
    >
      {children}
    </div>
  );
};

export default GradientBorder;
