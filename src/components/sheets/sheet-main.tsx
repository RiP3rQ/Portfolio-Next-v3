import { useSheets } from "@/providers/sheet-provider";
import { Sheet } from "@/components/ui/sheet";
import EmailSheetContent from "@/components/sheets/email-sheet-content";

type Props = {};
const SheetMounted = (props: Props) => {
  const { data, setData } = useSheets();
  return (
    <Sheet
      open={data.isOpen}
      onOpenChange={() => {
        setData({ isOpen: false, currentSheet: "Contact" });
      }}
    >
      <EmailSheetContent />
    </Sheet>
  );
};
export default SheetMounted;
