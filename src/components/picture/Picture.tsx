import React from "react";
import { Image } from "antd";
import { InputPicture } from "@/interfaces";

function Picture({ imgVideo }: InputPicture) {
  return (
    <Image
      preview={false}
      src={imgVideo}
      alt="video-image"
      className="mt-4 mb-4 rounded-[15px] inset-shadow-sm"
    />
  );
}

export default Picture;
