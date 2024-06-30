import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FaPaperPlane } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import SheetSelector from "@/components/sheets/sheet-selector";
import { PlaceholdersAndVanishInput } from "@/components/ui/Aceternity/PlaceholdersAndVanishInput";
import { PlaceholdersAndVanishTextArea } from "@/components/ui/Aceternity/PlaceholdersAndVanishTextArea";
import { X } from "lucide-react";
import { MultiStepLoader } from "@/components/ui/Aceternity/MultiStepLoader";
import { useState } from "react";
import { Vortex } from "@/components/ui/Aceternity/Vortex";
import { sendEmail } from "@/actions/send-email";
import { toast } from "sonner";

type Props = {
  sheetsData: typeof import("@/locale/english").data.sheets;
};

const EmailSheetContent = ({ sheetsData }: Props) => {
  const formSchema = z.object({
    title: z
      .string()
      .min(2, {
        message: "Title must be at least 2 characters long",
      })
      .max(50, {
        message: "Title must be less than 50 characters long",
      }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    message: z
      .string()
      .min(2, {
        message: "Your message must be at least 2 characters long",
      })
      .max(250, {
        message: "Your message must be less than 250 characters long",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      title: "",
      message: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [doneSending, setDoneSending] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const { data, error } = await sendEmail({
      email: values.email,
      title: values.title,
      message: values.message,
    });
    if (error) {
      toast.error("ERROR! Try again later!");
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setDoneSending(true);
    }, 6000);
  }

  async function handleCloseVortex() {
    setDoneSending(false);
    form.reset();
  }

  return (
    <SheetContent>
      {/* Core Loader Modal */}
      <MultiStepLoader
        loadingStates={sheetsData.contactSheet.loadingStates}
        loading={loading}
        duration={1000}
        loop={false}
      />
      {/* Vortex effect */}
      {doneSending && (
        <Vortex className="fixed inset-0 flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            {sheetsData.contactSheet.emailSent.title}
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            {sheetsData.contactSheet.emailSent.subTitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a
              href={"https://youtu.be/dQw4w9WgXcQ?si=pmKt6kDKY6t-DL3z"}
              target={"_blank"}
            >
              <Button
                variant={"link"}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
              >
                {sheetsData.contactSheet.emailSent.mainButton}
              </Button>
            </a>
            <Button
              className="px-4 py-2  text-white"
              variant={"ghost"}
              onClick={handleCloseVortex}
            >
              {sheetsData.contactSheet.emailSent.cancelButton}
            </Button>
          </div>
        </Vortex>
      )}
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <X className="h-10 w-10" />
        </button>
      )}
      <SheetSelector sheetsData={sheetsData} />
      <SheetHeader className={"mb-2"}>
        <SheetTitle>{sheetsData.contactSheet.title}</SheetTitle>
        <SheetDescription>{sheetsData.contactSheet.subTitle}</SheetDescription>
        <Separator />
      </SheetHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-3 w-full"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={"title"}>
                  {sheetsData.contactSheet.firstFormElement.title}:
                </FormLabel>
                <FormControl>
                  <PlaceholdersAndVanishInput
                    id={"title"}
                    type={"text"}
                    max={50}
                    placeholders={
                      sheetsData.contactSheet.firstFormElement.placeholders
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor={"email"}>
                  {sheetsData.contactSheet.secondFormElement.title}:
                </FormLabel>
                <FormControl>
                  <PlaceholdersAndVanishInput
                    id={"email"}
                    type={"text"}
                    placeholders={
                      sheetsData.contactSheet.secondFormElement.placeholders
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  {sheetsData.contactSheet.thirdFormElement.title}:
                </FormLabel>
                <FormControl>
                  <PlaceholdersAndVanishTextArea
                    placeholders={
                      sheetsData.contactSheet.thirdFormElement.placeholders
                    }
                    {...field}
                    rows={10}
                    maxLength={250}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-[#8950ff] py-5 px-10 rounded-md text-white font-bold text-lg w-full hover:text-[#8950ff] transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <div className="flex items-center justify-center space-x-4">
              <div>{sheetsData.contactSheet.button}</div>
              <div>
                <FaPaperPlane className="text-base opacity-70 " />
              </div>
            </div>
          </Button>
        </form>
      </Form>
    </SheetContent>
  );
};
export default EmailSheetContent;
