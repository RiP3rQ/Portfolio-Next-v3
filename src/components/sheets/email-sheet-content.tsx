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
import { sendEmail } from "@/actions/send-email";
import { CustomInput } from "@/components/ui/Aceternity/CustomInput";
import { CustomTextarea } from "@/components/ui/Aceternity/CustomTextArea";
import { Separator } from "@/components/ui/separator";
import SheetSelector from "@/components/sheets/sheet-selector";

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
    .max(2500, {
      message: "Twoja wiadomość musi mieć mniej niż 2500 znaków!",
    }),
});

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const notification = toast.loading("Wysyłam wiadomość...");

    const { data, error } = await sendEmail({
      email: values.email,
      title: values.title,
      message: values.message,
    });

    if (error) {
      toast.error("Coś poszło nie tak. Spróbuj ponownie później.", {
        id: notification,
      });
      return;
    }

    toast.success("Wiadomość wysłana pomyślnie!", {
      id: notification,
    });
    form.reset();
  }

  // TODO: SIGNS COUNTER /2500 limit
  // TODO: SHEET SCROLLABLE
  // TODO: PROPER SEND EMAIL HANDLING

  return (
    <SheetContent>
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
                  <CustomInput
                    id={"title"}
                    type={"text"}
                    placeholder="Message title"
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
                  <CustomInput
                    id={"email"}
                    type={"email"}
                    placeholder="Your@email.com"
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
                  <CustomTextarea
                    placeholder="Content of your message"
                    {...field}
                    rows={7}
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
