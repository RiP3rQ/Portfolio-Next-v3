import { Badge } from "@/components/ui/badge";
import { useSheets } from "@/providers/sheet-provider";
import React from "react";
import { cn } from "@/lib/utils";

type Props = {};
const SheetSelector = (props: Props) => {
  const { data, setData } = useSheets();

  const handleChangeSheet = (e: React.MouseEvent<HTMLDivElement>) => {
    const sheet = e.currentTarget.textContent;
    setData({ isOpen: true, currentSheet: sheet });
  };

  return (
    <div className={"my-2"}>
      <p className={"w-full text-center text-xs"}>Sheet selection:</p>
      <div className={"flex items-center justify-center gap-x-2"}>
        {["Contact", "AI", "FAQ", "Bug"].map((sheet, index) => (
          <Badge
            key={index}
            variant={"outline"}
            onClick={(e) => handleChangeSheet(e)}
            className={cn(
              "cursor-pointer",
              data.currentSheet === sheet && "bg-purple-500 text-white",
            )}
          >
            {sheet}
          </Badge>
        ))}
      </div>
    </div>
  );
};
export default SheetSelector;
