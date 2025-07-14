import { TextInput } from "@/interfaces";
import React from "react";

function Text({ number, text }: TextInput) {
  return (
    <p>
      <span>{number}</span> {text}
    </p>
  );
}

export default Text;
