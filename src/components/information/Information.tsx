import React from "react";
import { Alert } from "antd";

interface InformationInput {
  description: string;
  type: "success" | "error" | "info" | "warning";
}

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
