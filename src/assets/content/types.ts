export interface Project {
  id: number;
  type: "project" | "ref";
  title: string;
  projectImages: any[];
  mainText: string;
}

export enum ProjectImage {
  IMAGE = "IMAGE",
  TEXT = "TEXT",
  VIDEO = "VIDEO",
}
