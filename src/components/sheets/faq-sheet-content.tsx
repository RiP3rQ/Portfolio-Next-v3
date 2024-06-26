import SheetSelector from "@/components/sheets/sheet-selector";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

type Props = {};
const FAQSheetContent = (props: Props) => {
  return (
    <SheetContent>
      <SheetSelector />
      <SheetHeader className={"mb-2"}>
        <SheetTitle>FAQ</SheetTitle>
        <SheetDescription>List of frequently asked questions</SheetDescription>
        <Separator />
      </SheetHeader>
    </SheetContent>
  );
};
export default FAQSheetContent;
