import React from "react";
import { Image } from "antd";
import { InputPicture } from "@/interfaces";

function Picture({ imgVideo }: InputPicture) {
  return <Image preview={false} width={200} src={imgVideo} alt="video-image" />;
}

export default Picture;
