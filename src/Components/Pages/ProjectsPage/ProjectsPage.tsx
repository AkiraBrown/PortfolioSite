import { lazy } from "react";
const ProjectCard = lazy(() => import("./ProjectCard/ProjectCard"));

// interface Project {
//   title: string;
//   description: string;
//   lastCommit: Date;
//   status: "live" | "offline" | "developing";
// }
function ProjectsPage() {
  return (
    <main className="px-3 mt-5">
      ProjectsPage
      <ProjectCard />
    </main>
  );
}

export default ProjectsPage;
