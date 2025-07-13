import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { Qualitymp3, Qualitymp4 } from "@/mocks/options";
import ButtonDownload from "../buttonDownload/ButtonDownload";

interface DataFormat {
  quality: string;
  format: string;
}

interface InputData {
  format: "mp3" | "mp4";
}

const columns: TableColumnsType<DataFormat> = [
  {
    title: "Quality",
    dataIndex: "quality",
    key: "quality",
    width: 120,
  },
  {
    title: "Format",
    dataIndex: "format",
    key: "format",
    width: 100,
  },
  {
    title: "Action",
    dataIndex: "address",
    key: "address",
    width: 200,
    render: () => <ButtonDownload />,
  },
];

const renderFormat = (data: string) => {
  if (data === "mp3") {
    return Qualitymp3.map(({ quality, format }, index) => ({
      key: index.toString(),
      quality,
      format,
    }));
  } else {
    return Qualitymp4.map(({ quality, format }, index) => ({
      key: index.toString(),
      quality,
      format,
    }));
  }
};

function TableData({ format }: InputData) {
  return (
    <div>
      <Table<DataFormat>
        columns={columns}
        dataSource={renderFormat(format)}
        pagination={false}
      />
    </div>
  );
}

export default TableData;
