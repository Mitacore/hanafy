
export enum AspectRatio {
  SQUARE = "1:1",
  PORTRAIT = "3:4",
  LANDSCAPE = "4:3",
  MOBILE = "9:16",
  WIDESCREEN = "16:9"
}

export enum CameraAngle {
  EYE_LEVEL = "Eye Level",
  TOP_DOWN = "Top-Down (Flat Lay)",
  LOW_ANGLE = "Low Angle (Heroic)",
  HIGH_ANGLE = "High Angle (Overview)",
  MACRO = "Macro (Close-up)",
  ISOMETRIC = "Isometric (3D)"
}

export enum ModelType {
  FLASH = "gemini-2.5-flash-image",
  PRO = "gemini-3-pro-image-preview"
}

export enum ImageSize {
  K1 = "1K",
  K2 = "2K",
  K4 = "4K"
}

export interface MockupItem {
  id: string;
  url: string;
  prompt: string;
  model: ModelType;
  timestamp: number;
  aspectRatio: AspectRatio;
}

export interface GeneratorConfig {
  prompt: string;
  model: ModelType;
  aspectRatio: AspectRatio;
  cameraAngle: CameraAngle;
  imageSize?: ImageSize;
  sourceImage?: string; // Base64
  creativeMode: boolean;
}
