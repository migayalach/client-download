import { Format, Result } from "@/types";

export interface InformationInput {
  description: string;
  type: Result;
}

export interface InputPicture {
  imgVideo: string;
}

export interface InputDataDownload {
  url: string;
  quality: string;
  format: string;
}

export interface infoState {
  value: string;
  action: boolean;
  state: Result;
}

export interface RadioInput {
  url: string;
}

export interface DataFormat {
  quality: string;
  format: string;
}

export interface InputData {
  format: Format;
  url: string;
}

export interface TextInput {
  number: number;
  text: string;
}
