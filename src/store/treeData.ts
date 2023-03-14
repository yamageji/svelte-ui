import { readable } from "svelte/store";

const contents = [
  {
    title: "Projects",
    child: [
      "project-1.docx",
      "project-2.docx",
      {
        title: "Project3",
        child: ["project-3A.docx", "project-3B.docx"],
      },
    ],
  },
  {
    title: "Reports",
    child: [
      {
        title: "Report1",
        child: ["report-1A.docx", "report-1B.docx"],
      },
    ],
  },
];

const treeData = readable(contents);
export { treeData };
