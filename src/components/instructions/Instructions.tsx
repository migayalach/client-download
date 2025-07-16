import React from "react";
import { textAbout1, textAbout2 } from "@/mocks/about";
import Text from "../text/Text";

function Instructions() {
  return (
    <div
      id="instructions"
      className="flex flex-col mt-4 mb-4 md:flex md:flex-row md:justify-evenly"
    >
      <div id="container-1">
        <h1 className="text-[20px] font-medium mb-2 md:text-[27px]">
          How to download videos or music from YouTube?
        </h1>
        {textAbout1.map(({ text }, index) => {
          return (
            <div key={index}>
              <Text number={index + 1} text={text} />
            </div>
          );
        })}
      </div>
      <div id="container-2">
        <h1 className="text-[20px] font-medium mt-2 mb-2 md:mt-0 md:text-[27px]">
          Characteristics:
        </h1>
        {textAbout2.map(({ text }, index) => {
          return (
            <div key={index}>
              <Text number={index + 1} text={text} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Instructions;
