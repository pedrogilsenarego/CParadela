import { i18n } from "../../translations/i18n";
import { ProjectImages } from "./types";

export const projects = [
  {
    id: 0,
    type: "project",
    title: i18n.t("projects.projectBlueT"),
    projectImages: [
      {
        type: ProjectImages.IMAGE,
        image:
          "https://payload.cargocollective.com/1/19/618130/12243704/sim17_670.png",
      },
      {
        type: ProjectImages.IMAGE,
        image:
          "https://i.pinimg.com/originals/5b/d8/30/5bd830f774fc4e9ffec26200d74b4b2e.jpg",
      },
      {
        type: ProjectImages.IMAGE,
        image:
          "https://www.edx.org/static/bfb3565666d1bd78f05ff77f5c19057c/learn_architecture.jpg",
      },
      {
        type: ProjectImages.TEXT,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
    mainText: i18n.t("projects.projectBlueM"),
  },
];

export const references = [
  {
    id: 0,
    type: "reference",
    title: i18n.t("projects.projectBlueT"),
    projectImages: [
      {
        type: ProjectImages.IMAGE,
        image:
          "https://i.pinimg.com/originals/5b/d8/30/5bd830f774fc4e9ffec26200d74b4b2e.jpg",
      },
      {
        type: ProjectImages.IMAGE,
        image:
          "https://i.pinimg.com/originals/5b/d8/30/5bd830f774fc4e9ffec26200d74b4b2e.jpg",
      },
      {
        type: ProjectImages.IMAGE,
        image:
          "https://www.edx.org/static/bfb3565666d1bd78f05ff77f5c19057c/learn_architecture.jpg",
      },
    ],
    mainText: i18n.t("projects.projectBlueM"),
  },
];
