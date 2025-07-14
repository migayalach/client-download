import React from "react";
import { info } from "@/mocks/instruction";
import Image from "next/image";

function About() {
  return (
    <>
      {info.map(({ image, title, description }, index) => {
        return (
          <div key={index}>
            <div>
              <Image src={image} alt={title} width={40} height={40} />
            </div>
            <div>{title}</div>
            <div>{description}</div>
          </div>
        );
      })}
    </>
  );
}

export default About;
