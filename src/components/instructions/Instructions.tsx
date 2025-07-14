import React from "react";
import { textAbout1, textAbout2 } from "@/mocks/about";
import Text from "../text/Text";

function Instructions() {
  return (
    <div className="">
      <div id="container-1">
        <h1>How to download videos or music from YouTube?</h1>
        {textAbout1.map(({ text }, index) => {
          return (
            <>
              <Text number={index + 1} text={text} key={index} />
            </>
          );
        })}
      </div>
      <div id="container-2">
        <h1>Characteristics:</h1>
        {textAbout2.map(({ text }, index) => {
          return (
            <>
              <Text number={index + 1} text={text} key={index} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Instructions;
