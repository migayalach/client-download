"use client";
import React, { useEffect, useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import ProgressAction from "@/components/progressAction/ProgressAction";

interface InputDataDownload {
  url: string;
  quality: string;
  format: string;
}

function ButtonDownload({ url, quality, format }: InputDataDownload) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dispatch, setDispatch] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const downloadFile = () => {
    setIsModalOpen(true);
    setDispatch(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        setIsModalOpen(false);
        setDispatch(false);
      }, 5000);
    }
  }, [dispatch, isModalOpen]);

  return (
    <div>
      <Button type="primary" icon={<DownloadOutlined />} onClick={downloadFile}>
        Download
      </Button>
      <Modal
        title="Please wait a moment, your song is downloading."
        closable={false}
        open={isModalOpen}
        onOk={handleOk}
        footer={null}
      >
        <ProgressAction />
      </Modal>
    </div>
  );
}

export default ButtonDownload;
