export interface Size {
  width: number;
  height: number;
}

export interface ImageData {
  url: string;
  size: Size;
  name: string;
}

export interface MarkData {
  topPercent: number;
  leftPercent: number;
  text: string;
  id: string;
}
