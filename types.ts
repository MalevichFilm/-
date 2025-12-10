
export interface Slide {
  id: number;
  textRu: string;
  textEn: string;
  illustrationType: string;
  isTitle?: boolean;
  isEnd?: boolean;
}

export interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}
