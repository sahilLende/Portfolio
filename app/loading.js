import React from "react";

const Loading = () => {
  return (
    <div className="relative mt-16 h-[50vh]  text-center">
      <div className="absolute bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 transform ">
        <div className="h-14 w-14 animate-spin  rounded-full border-8 border-solid border-blue-400 border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Loading;
