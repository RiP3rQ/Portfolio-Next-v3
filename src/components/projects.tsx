import ProjectsTitle from "@/components/projects/projects-title";
import ProjectItem from "@/components/projects/project-item";
import React from "react";

type Props = {
  data: typeof import("@/locale/english").data.projects;
};

const RecentProjects = ({ data }: Props) => {
  return (
    <div className="py-20">
      <ProjectsTitle
        title_noColor={data.title_noColor}
        title_color={data.title_color}
      />
      <div className="flex items-center justify-center space-y-4 flex-col w-full">
        {data?.projects?.map((item) => <ProjectItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default RecentProjects;
