import React from "react";
import { Image } from "antd";

interface InputPicture {
  imgVideo: string;
}

function Picture({ imgVideo }: InputPicture) {
  return <Image preview={false} width={200} src={imgVideo} alt="video-image" />;
}

export default Picture;
