// import Image from "next/image";
//
// return (
//     <div
//       className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center w-full"
//       key={id}
//     >
//       <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
//         {title}
//       </h1>
//
//       <p
//         className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
//         style={{
//           color: "#BEC1DD",
//           margin: "1vh 0",
//         }}
//       >
//         {des}
//       </p>
//
//       <div className="flex items-center justify-between mt-7 mb-3">
//         <div className="flex items-center">
//           {iconLists.map((icon, index) => (
//             <div
//               key={index}
//               className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
//               style={{
//                 transform: `translateX(-${5 * index + 2}px)`,
//               }}
//             >
//               <img src={icon} alt="icon5" className="p-2" />
//             </div>
//           ))}
//         </div>
//
//         <div className="flex justify-center items-center">
//           <p className="flex lg:text-xl md:text-xs text-sm text-purple">
//             Check Live Site
//           </p>
//           <FaLocationArrow className="ms-3" color="#CBACF9" />
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import ProjectImage from "@/components/projects/project-image";
import Link from "next/link";
import TechnologyIcon from "@/components/projects/technology-icon";

type Props = {
  id: number;
  title: string;
  description: string;
  img: string;
  iconLists: { title: string; description: string; img: string }[];
  linkText: string;
  link: string;
};
const ProjectItem = ({
  id,
  title,
  description,
  img,
  iconLists,
  linkText,
  link,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="flex items-center justify-center w-full lg:min-h-[32.5rem] h-[25rem]"
    >
      <div
        className="flex flex-col items-start justify-center w-1/2 sm:w-3/4"
        key={id}
      >
        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {title}
        </h1>

        <p
          className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          {description}
        </p>
        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {iconLists.map((icon, index) => (
              <TechnologyIcon key={index} icon={icon} index={index} />
            ))}
          </div>

          <Link
            className="flex justify-center items-center cursor-pointer hover:underline"
            target={"_blank"}
            href={link}
          >
            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
              {linkText}
            </p>
            <FaLocationArrow className="ms-3" color="#CBACF9" />
          </Link>
        </div>
      </div>
      <div className={"sm:w-1/2 w-1/4 h-full flex items-center justify-center"}>
        <ProjectImage img={img} link={link} title={title} />
      </div>
    </motion.div>
  );
};

export default ProjectItem;
