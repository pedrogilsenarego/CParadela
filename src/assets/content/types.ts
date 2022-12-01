export interface Project {
  type: "project" | "ref";
  title: string;
  mainImage: string;
  projectImages: string[];
  mainText: string;
}
