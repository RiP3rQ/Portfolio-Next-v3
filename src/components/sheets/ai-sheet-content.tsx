import SheetSelector from "@/components/sheets/sheet-selector";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

type Props = {};
const AISheetContent = (props: Props) => {
  return (
    <SheetContent>
      <SheetSelector />
      <SheetHeader className={"mb-2"}>
        <SheetTitle>Chat with my AI</SheetTitle>
        <SheetDescription>
          Ask my AI assistant for more information about me.
        </SheetDescription>
        <Separator />
      </SheetHeader>
    </SheetContent>
  );
};
export default AISheetContent;
