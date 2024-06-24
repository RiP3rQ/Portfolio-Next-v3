"use client";

import ProjectsTitle from "@/components/projects/projects-title";
import ProjectItem from "@/components/projects/project-item";
import { useLocation } from "@/providers/localization-provider";
import React, { useEffect, useState } from "react";
import { projects as EnglishProjects } from "@/locale/english";
import { projects as PolishProjects } from "@/locale/polish";

const RecentProjects = () => {
  const { data } = useLocation();
  const [fetchedData, setFetchedData] = useState<typeof EnglishProjects>([]);

  useEffect(() => {
    if (data === "EN") {
      setFetchedData(EnglishProjects);
    } else {
      setFetchedData(PolishProjects);
    }
  }, [data]);

  if (!fetchedData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-20">
      <ProjectsTitle
        title_noColor={fetchedData.title_noColor}
        title_color={fetchedData.title_color}
      />
      <div className="flex items-center justify-center space-y-4 flex-col w-full">
        {fetchedData?.projects?.map((item) => (
          <ProjectItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
