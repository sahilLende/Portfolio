import React from "react";
import GradientBorder from "../Components/GradientBorder";
import clsx from "clsx";
const AboutCard = ({ data }) => {
  return (
    <div className="mx-auto max-w-4xl">
      <GradientBorder type={"primary"}>
        <div className="rounded-md bg-white p-4">
          {/* incremental */}
          {data.map((item, index) => {
            return (
              <Details
                key={item.title}
                extra={item.extra}
                title={item.title}
                subtitle={item.subtitle}
                from={item.from}
                to={item.to}
                index={index}
                length={data.length}
              />
            );
          })}
        </div>
      </GradientBorder>
    </div>
  );
};

export default AboutCard;

const Details = ({ title, subtitle, from, to, extra, index, length }) => {
  console.log(index < length - 1);
  return (
    <div className={clsx(index !== length - 1 && "border-b-2", "mt-2 pb-2")}>
      <div className=" flex flex-col justify-between  gap-1 font-inter text-sm  antialiased md:flex-row   md:text-base">
        <div className="my-2 md:my-0 ">
          <h6 className=" mb-1 font-inter  font-bold ">{title}</h6>
          <p className="  font-nomral">{subtitle}</p>
        </div>
        <h2
          className=" 
        italic"
        >
          {from} - {to}
        </h2>
      </div>

      <ul className="list mt-3 md:text-base ">
        {extra.map((item, index) => {
          return (
            <li key={index} className="mb-1 ml-3">
              -
              {item.name && (
                <span className="mr-1 font-semibold">{item.name}:</span>
              )}
              <span className="  font-semibold"></span>
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
