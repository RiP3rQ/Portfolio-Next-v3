import { useSheets } from "@/providers/sheet-provider";
import { Sheet } from "@/components/ui/sheet";
import EmailSheetContent from "@/components/sheets/email-sheet-content";
import AISheetContent from "@/components/sheets/ai-sheet-content";
import FAQSheetContent from "@/components/sheets/faq-sheet-content";

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
      {data.currentSheet === "Contact" && <EmailSheetContent />}
      {data.currentSheet === "AI" && <AISheetContent />}
      {data.currentSheet === "FAQ" && <FAQSheetContent />}
    </Sheet>
  );
};
export default SheetMounted;
