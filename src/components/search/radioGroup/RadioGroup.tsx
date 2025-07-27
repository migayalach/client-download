"use client";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import TableData from "../tableData/TableData";
import { RadioInput } from "@/interfaces";

const optionsWithDisabled: CheckboxGroupProps<string>["options"] = [
  { label: "mp3", value: "mp3", className: "label-1" },
  { label: "mp4", value: "mp4", className: "label-2" },
];

function RadioGroup({ url }: RadioInput) {
  const [value, setValue] = useState<"mp3" | "mp4">("mp3");

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
  };

  return (
    <div className="md:ml-20 md:mt-4">
      <Radio.Group
        data-testid="radio-group"
        options={optionsWithDisabled}
        onChange={onChange}
        value={value}
        optionType="button"
        buttonStyle="solid"
      />
      <TableData format={value} url={url} />
    </div>
  );
}

export default RadioGroup;
