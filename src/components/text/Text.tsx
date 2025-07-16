import { TextInput } from "@/interfaces";
import React from "react";

function Text({ number, text }: TextInput) {
  return (
    <p className="p-1 mt-1 text-[16px] md:text-[19px]">
      <span className="font-medium">{number} :</span> {text}
    </p>
  );
}

export default Text;
