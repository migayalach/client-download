"use client";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import type { GetProps } from "antd";
import Picture from "@/components/picture/Picture";
import RadioGroup from "../radioGroup/RadioGroup";
import Information from "@/components/information/Information";
import { infoState } from "@/interfaces";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

function Find() {
  const [inputValue, setInputValue] = useState<string>("");
  const [urlVideo, setUrlVideo] = useState<string>("");
  const [imageVideo, setImageVideo] = useState<string>("");
  const [info, setInfo] = useState<infoState>({
    value: "",
    state: "info",
    action: false,
  });

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
      setInfo({
        value: String(error),
        action: true,
        state: "error",
      });
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

  useEffect(() => {
    if (info.action) {
      setTimeout(() => {
        setInfo({
          value: "",
          state: "info",
          action: false,
        });
        setInputValue("");
        setUrlVideo("");
      }, 3000);
    }
  }, [info]);

  return (
    <div
      className="flex flex-col justify-center items-center"
      data-testid="find-container-data"
    >
      <Search
        data-testid="search-data"
        className="md:max-w-[1200px]"
        size="large"
        placeholder="Please introduce your link"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onSearch={onSearch}
        enterButton
        allowClear
      />
      <div className="md:flex" data-testid="container-div-data">
        {imageVideo && <Picture imgVideo={imageVideo} />}
        {imageVideo && <RadioGroup url={urlVideo} />}
      </div>
      {info.action && (
        <Information description={info.value} type={info.state} />
      )}
    </div>
  );
}

export default Find;
