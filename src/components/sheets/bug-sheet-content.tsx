import SheetSelector from "@/components/sheets/sheet-selector";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

type Props = {};
const BugSheetContent = (props: Props) => {
  return (
    <SheetContent>
      <SheetSelector />
      <SheetHeader className={"mb-2"}>
        <SheetTitle>Report a bug</SheetTitle>
        <SheetDescription>
          If you have found a bug, please report it here.
        </SheetDescription>
        <Separator />
      </SheetHeader>
    </SheetContent>
  );
};
export default BugSheetContent;
