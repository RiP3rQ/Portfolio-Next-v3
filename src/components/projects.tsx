"use client";

import { projects } from "@/data";
import ProjectsTitle from "@/components/projects-title";
import ProjectItem from "@/components/project-item";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <ProjectsTitle />
      <div className="flex items-center justify-center space-y-4 flex-col w-full">
        {projects.map((item) => (
          <ProjectItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
