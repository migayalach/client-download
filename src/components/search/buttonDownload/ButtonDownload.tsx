"use client";
import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface InputDataDownload {
  url: string;
  quality: string;
  format: string;
}

function ButtonDownload({ url, quality, format }: InputDataDownload) {
  // console.log(url, quality, format);

  const downloadFile = () => {
    console.log(":D");
  };

  return (
    <div>
      <Button type="primary" icon={<DownloadOutlined />} onClick={downloadFile}>
        Download
      </Button>
    </div>
  );
}

export default ButtonDownload;
