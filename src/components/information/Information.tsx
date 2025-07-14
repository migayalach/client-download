import React from "react";
import { Alert } from "antd";
import { InformationInput } from "@/interfaces";

function Information({ description, type }: InformationInput) {
  return (
    <Alert
      message="Information"
      description={description}
      type={type}
      showIcon
    />
  );
}

export default Information;
