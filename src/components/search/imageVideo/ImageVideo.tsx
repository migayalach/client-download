import React from "react";
import { Image } from "antd";

interface InputImageData {
  imgVideo: string;
}

function ImageVideo({ imgVideo }: InputImageData) {
  return <Image preview={false} width={200} src={imgVideo} />;
}

export default ImageVideo;
