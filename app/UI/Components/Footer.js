import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="mt-4 w-full  ">
      <div className="mx-auto max-w-screen-xl  overflow-hidden px-4  pb-2 sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6">
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
        <p className="mt-8 text-center text-base leading-6 text-gray-400">
          © 2023 Sahil Lende
        </p>
      </div>
    </section>
  );
};

export default Footer;
