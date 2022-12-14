export interface Project {
  id:number
  type: "project" | "ref";
  title: string
  projectImages: string[];
  mainText: string;
}

export enum ProjectImages {
  IMAGE= "IMAGE",
  TEXT= "TEXT",
  VIDEO= "VIDEO"
}