import { Badge } from "@/components/ui/badge";
import { useSheets } from "@/providers/sheet-provider";
import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

type Props = {
  sheetsData: typeof import("@/locale/english").data.sheets;
};
const SheetSelector = ({ sheetsData }: Props) => {
  const { data, setData } = useSheets();

  const handleChangeSheet = (e: React.MouseEvent<HTMLDivElement>) => {
    const sheet = e.currentTarget.textContent as "Contact" | "FAQ";
    setData({ isOpen: true, currentSheet: sheet });
  };

  return (
    <div className={"my-2"}>
      <p className={"w-full text-center text-xs"}>
        {sheetsData.sheetOptions.title}
      </p>
      <div className={"flex items-center justify-center gap-x-2"}>
        {sheetsData.sheetOptions.options.map((sheet, index) => (
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
      <Separator className={"mt-2"} />
    </div>
  );
};
export default SheetSelector;
