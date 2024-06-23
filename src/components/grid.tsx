"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/Aceternity/BentoGrid";
import { useLocation } from "@/providers/localization-provider";
import React, { useEffect, useState } from "react";
import { bentoGrid as EnglishBentoGrid } from "@/locale/english";
import { bentoGrid as PolishBentoGrid } from "@/locale/polish";

const Grid = () => {
  const { data } = useLocation();
  const [fetchedData, setFetchedData] = useState<typeof EnglishBentoGrid>(null);

  useEffect(() => {
    if (data === "EN") {
      setFetchedData(EnglishBentoGrid);
    } else {
      setFetchedData(PolishBentoGrid);
    }
  }, [data]);

  if (!fetchedData) {
    return <div>Loading...</div>;
  }
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {fetchedData.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            contantButtonName={item?.contantButtonName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
