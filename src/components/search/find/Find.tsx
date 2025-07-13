"use client";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import type { GetProps } from "antd";
import ImageVideo from "../imageVideo/ImageVideo";
import RadioGroup from "../radioGroup/RadioGroup";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

function Find() {
  const [inputValue, setInputValue] = useState<string>("");
  const [urlVideo, setUrlVideo] = useState<string>("");
  const [imageVideo, setImageVideo] = useState<string>("");

  const extractVideoId = (url: string): string | null => {
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname === "youtu.be") {
        return parsedUrl.pathname.slice(1);
      }
      if (parsedUrl.hostname.includes("youtube.com")) {
        return parsedUrl.searchParams.get("v");
      }
    } catch (error) {
      console.log(error);
      return null;
    }
    return null;
  };

  const onSearch: SearchProps["onSearch"] = (value) => {
    setUrlVideo(value);
  };

  useEffect(() => {
    if (urlVideo.length > 1) {
      const videoId = extractVideoId(urlVideo);
      if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        setImageVideo(thumbnailUrl);
      } else {
        setImageVideo("");
      }
    } else {
      setImageVideo("");
    }
  }, [urlVideo]);

  return (
    <>
      <Search
        size="large"
        placeholder="Please introduce your link"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSearch={onSearch}
        enterButton
        allowClear
      />
      {imageVideo && <ImageVideo imgVideo={imageVideo} />}
      {imageVideo && <RadioGroup />}
    </>
  );
}

export default Find;
