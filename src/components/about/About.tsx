import React from "react";
import { info } from "@/mocks/instruction";
import Image from "next/image";

function About() {
  return (
    <div
      id="about"
      className="mt-4 mb-4 md:flex sm:flex sm:flex-row sm:justify-between md:flex-row md:items-center md:justify-evenly"
    >
      {info.map(({ image, title, description }, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center mt-6 p-4 rounded-md bg-[#1b1b32] md:w-[385px] md:h-[250px] sm:w-[200px]"
          >
            <Image
              src={image}
              alt={title}
              width={60}
              height={60}
              className="mb-4 invert"
            />
            <h1 className="text-[18px] text-[#fff] font-normal">{title}</h1>
            <p className="text-[15px] text-[#fff]">{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default About;
