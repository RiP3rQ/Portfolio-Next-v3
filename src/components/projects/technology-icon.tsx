import { AnimatedTooltip } from "@/components/ui/Aceternity/AnimatedTooltip";

type Props = {
  icon: string;
  index: number;
};

// TODO: ADD TECHNOLOGIES TITLES AND DESCRTIPTIONS
const TechnologyIcon = ({ icon, index }: Props) => {
  return (
    <div
      key={index}
      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 size-8 flex justify-center items-center hover:cursor-pointer"
      style={{
        transform: `translateX(-${5 * index + 2}px)`,
      }}
    >
      <AnimatedTooltip
        icon={icon}
        index={index}
        title={"test"}
        description={"test-est"}
      />
    </div>
  );
};
export default TechnologyIcon;
