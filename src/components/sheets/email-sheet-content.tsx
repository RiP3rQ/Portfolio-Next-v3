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
import { toast } from "sonner";
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

const formSchema = z.object({
  email: z.string().email({
    message: "Podaj poprawny adres email.",
  }),
  title: z
    .string()
    .min(2, {
      message: "Tytuł twojego email musi mieć conajmniej 2 znaki",
    })
    .max(50),
  message: z
    .string()
    .min(2, {
      message: "Twoja wiadomość musi mieć conajmniej 2 znaki!",
    })
    .max(250, {
      message: "Twoja wiadomość musi mieć mniej niż 250 znaków!",
    }),
});

const placeholders = [
  "Type your message here",
  "What's on your mind?",
  "How can we help you?",
  "What can we do for you?",
  "What's your question?",
  "What's your feedback?",
  "What's your suggestion?",
  "What's your opinion?",
  "What's your concern?",
  "What's your idea?",
  "What's your request?",
  "What's your thought?",
  "What's your comment?",
  "What's your query?",
  "What's your problem?",
  "What's your issue?",
  "What's your answer?",
  "What's your inquiry?",
  "What's your input?",
  "What's your response?",
  "What's your review",
];

const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];

type Props = {};
const EmailSheetContent = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      title: "",
      message: "",
    },
  });
  const [loading, setLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const notification = toast.loading("Wysyłam wiadomość...");

    console.log("Email: ", values);

    // TODO: UNCOMMENT LATER
    // const { data, error } = await sendEmail({
    //   email: values.email,
    //   title: values.title,
    //   message: values.message,
    // });

    // if (error) {
    //   toast.error("Coś poszło nie tak. Spróbuj ponownie później.", {
    //     id: notification,
    //   });
    //   return;
    // }

    setTimeout(() => {
      setLoading(false);
      toast.success("Wiadomość wysłana pomyślnie!", {
        id: notification,
      });
      form.reset();
    }, 6000);
  }

  // TODO: SHEET SCROLLABLE
  // TODO: PROPER SEND EMAIL HANDLING

  return (
    <SheetContent>
      {/* Core Loader Modal */}
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={loading}
        duration={1000}
        loop={false}
      />
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <X className="h-10 w-10" />
        </button>
      )}
      <SheetSelector />
      <SheetHeader className={"mb-2"}>
        <SheetTitle>Send me an email</SheetTitle>
        <SheetDescription>
          Fill the form below and I will get back to you as soon as possible.
        </SheetDescription>
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
                <FormLabel htmlFor={"title"}>Tytuł:</FormLabel>
                <FormControl>
                  <PlaceholdersAndVanishInput
                    id={"title"}
                    type={"text"}
                    max={50}
                    placeholders={placeholders}
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
                <FormLabel htmlFor={"email"}>Email:</FormLabel>
                <FormControl>
                  <PlaceholdersAndVanishInput
                    id={"email"}
                    type={"text"}
                    placeholders={["essa", "bessa"]}
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
                <FormLabel>Message:</FormLabel>
                <FormControl>
                  <PlaceholdersAndVanishTextArea
                    placeholders={["essa", "bessa"]}
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
              <div>Send</div>
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
