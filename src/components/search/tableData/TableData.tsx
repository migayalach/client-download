import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { Qualitymp3, Qualitymp4 } from "@/mocks/options";
import ButtonDownload from "../buttonDownload/ButtonDownload";
import { DataFormat, InputData } from "@/interfaces";

function TableData({ format, url }: InputData) {
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
      key: "action",
      width: 200,
      render: ({ format, quality }) => (
        <ButtonDownload url={url} format={format} quality={quality} />
      ),
    },
  ];

  return (
    <div>
      <Table<DataFormat>
        table-testId="table-data"
        columns={columns}
        dataSource={renderFormat(format)}
        pagination={false}
      />
    </div>
  );
}

export default TableData;
