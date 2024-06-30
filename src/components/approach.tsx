"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/Aceternity/CanvasRevealEffect";

type Props = {
  data: typeof import("@/locale/english").data.approach;
};

const Approach = ({ data }: Props) => {
  return (
    <section className="w-4/5 lg:w-full py-20 mx-auto lg:px-6">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        {data.subTitle} <span className="text-[#CBACF9]">{data.mainTitle}</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-6">
        <Card
          title={data.phase1.title}
          icon={<AceternityIcon order={data.phase1.order} />}
          des={data.phase1.description}
        >
          <CanvasRevealEffect
            animationSpeed={data.phase1.animationSpeed}
            containerClassName={data.phase1.containerClassName}
          />
        </Card>
        <Card
          title={data.phase2.title}
          icon={<AceternityIcon order={data.phase2.order} />}
          des={data.phase2.description}
        >
          <CanvasRevealEffect
            animationSpeed={data.phase2.animationSpeed}
            containerClassName={data.phase2.containerClassName}
            colors={data.phase2.colors}
            dotSize={data.phase2.dotSize}
          />
        </Card>
        <Card
          title={data.phase3.title}
          icon={<AceternityIcon order={data.phase3.order} />}
          des={data.phase3.description}
        >
          <CanvasRevealEffect
            animationSpeed={data.phase3.animationSpeed}
            containerClassName={data.phase3.containerClassName}
            colors={data.phase3.colors}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute size-10 -top-5 -left-5 dark:text-white text-black opacity-30" />
      <Icon className="absolute size-10 -bottom-5 -left-5 dark:text-white text-black opacity-30" />
      <Icon className="absolute size-10 -top-5 -right-5 dark:text-white text-black opacity-30" />
      <Icon className="absolute size-10 -bottom-5 -right-5 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
