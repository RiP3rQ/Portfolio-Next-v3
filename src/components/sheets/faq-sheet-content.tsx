import SheetSelector from "@/components/sheets/sheet-selector";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <SheetDescription>
        <Accordion type="multiple" className="w-full ">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What motivated you to start coding?
            </AccordionTrigger>
            <AccordionContent>
              From a young age, I was fascinated by how technology shapes our
              world. My curiosity led me to explore coding, and I loved the idea
              of creating something out of nothing. This passion grew as I
              started building my own projects and seeing the impact they could
              have.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What kind of commercial projects have you worked on?
            </AccordionTrigger>
            <AccordionContent>
              In my six months of commercial experience, I have worked on
              several projects, including developing a dynamic e-commerce
              platform using Next.js and integrating it with a custom backend. I
              also contributed to a SaaS application, focusing on enhancing the
              user interface and optimizing performance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Why did you choose Next.js as your main framework?
            </AccordionTrigger>
            <AccordionContent>
              I chose Next.js because of its powerful features, such as
              server-side rendering, static site generation, and its seamless
              integration with React. These features allow for building
              high-performance, SEO-friendly applications, which are crucial in
              modern web development.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What are your long-term career goals as a fullstack developer?
            </AccordionTrigger>
            <AccordionContent>
              My long-term goal is to become a lead developer or a fullstack
              architect, where I can oversee the development process from start
              to finish. I aim to continually improve my skills, contribute to
              innovative projects, and mentor junior developers to help them
              grow in their careers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              What is your experience with backend technologies and databases?
            </AccordionTrigger>
            <AccordionContent>
              I have experience working with Node.js and Express for backend
              development. For databases, I have used MongoDB and PostgreSQL. I
              have implemented RESTful APIs, handled database migrations, and
              worked on authentication and authorization systems.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What is your highest level of education?
            </AccordionTrigger>
            <AccordionContent>
              I hold a Bachelor's degree in Computer Science, where I gained a
              strong foundation in algorithms, data structures, and software
              engineering principles. This education has been instrumental in my
              ability to write efficient and maintainable code.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              What have you recently learned, and what technologies or skills
              are you planning to learn next?
            </AccordionTrigger>
            <AccordionContent>
              Recently, I have focused on improving my skills in TypeScript,
              which has greatly enhanced the robustness of my code. Next, I plan
              to delve into GraphQL to better handle complex data fetching
              requirements and improve the efficiency of my applications.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              How do you stay updated with the latest trends and updates in
              Next.js and web development?
            </AccordionTrigger>
            <AccordionContent>
              I stay updated by following industry blogs, subscribing to
              newsletters, and participating in online communities such as Stack
              Overflow and Reddit. Additionally, I regularly attend webinars and
              workshops and contribute to open-source projects to keep my skills
              sharp and current.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetDescription>
    </SheetContent>
  );
};
export default FAQSheetContent;
