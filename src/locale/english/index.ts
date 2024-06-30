export const data = {
  navbar: {
    profile: {
      slug: "RiP3rQ",
      title: "Rafał 'RiP3rQ' Pompa",
      description:
        "Converting concepts into fully realized, end-to-end solutions as a Junior Full Stack Developer.",
      image: "/avatar.png",
      link: "https://github.com/RiP3rQ",
      dateText: "Developing since February 2020",
    },
    github: {
      slug: "Github",
      title: "Github",
      description: "Look at my projects and contributions on Github.",
      image: "/socials/git.svg",
      link: "https://github.com/RiP3rQ",
      dateText: "Joined July 2022",
    },
    linkedin: {
      slug: "LinkedIn",
      title: "LinkedIn",
      description: "Connect with me on LinkedIn for professional networking.",
      image: "/linkedin.png",
      link: "https://www.linkedin.com/in/rafalpompa00/",
      dateText: "Joined December 2023",
    },
    contact: {
      slug: "Contact",
      title: "Contact",
    },
  },

  hero: {
    subTitle: "FULLSTACK WEB MAGIC WITH NEXT.JS",
    mainTitle: "Building Dynamic, End-to-End Web Solutions",
    description:
      "Hi! I'm Rafał, a skilled Fullstack Next.js Developer based in Poland. With a passion for transforming innovative ideas into efficient and engaging web applications, I specialize in delivering robust solutions that drive success.",
    button: "Let's Connect",
  },

  bentoGrid: [
    {
      id: 1,
      title: "Bridging Frontend and Backend for Seamless Integration",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-start max-w-full",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "Transforming Ideas into Robust Digital Solutions. ",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack:",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Empowering Innovation Through Full-Stack Expertise.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "absolute right-0 bottom-0 w-60",
      titleClassName: "justify-start",
      img: "/b4.svg",
      spareImg: "/grid.svg",
    },

    {
      id: 5,
      title: "Currently building AI Next projects and learning RUST.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
      contactButtonName: "Copy my email address",
    },
  ],

  projects: {
    title_noColor: "A small selection of",
    title_color: "recent projects",
    projects: [
      {
        id: 1,
        title: "AI-Butler",
        description:
          "AI-Butler is an innovative project that uses artificial intelligence to act as a virtual assistant. From taking simple notes to providing intelligent insights based on their context. Create notes containing valuable information that the AI will analyze and use its context to create its own answers. If answering questions based on the context of your notes isn't enough, query the OpenAI model directly.",
        img: "/projects/aibutler.png",
        iconLists: [
          {
            title: "NEXT",
            description:
              "Fullstack framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
            img: "/technologies/next.svg",
          },
          {
            title: "React",
            description:
              "A JavaScript library for building user interfaces, particularly single-page applications.",
            img: "/technologies/react.svg",
          },
          {
            title: "TailwindCSS",
            description:
              "A utility-first CSS framework for rapidly building custom user interfaces.",
            img: "/technologies/tailwind.svg",
          },
          {
            title: "TypeScript",
            description:
              "A superset of JavaScript that adds static types for better tooling and error checking.",
            img: "/technologies/ts.svg",
          },
          {
            title: "OpenAI",
            description:
              "An AI research lab providing powerful models like GPT for natural language understanding and generation.",
            img: "/technologies/openai.png",
          },
          {
            title: "PineconeDB",
            description:
              "A vector database for managing and querying high-dimensional data used in AI applications.",
            img: "/technologies/pinecone.png",
          },
          {
            title: "NeonDB",
            description:
              "A modern, serverless Postgres database designed for the cloud.",
            img: "/technologies/neon.png",
          },
          {
            title: "DrizzleORM",
            description:
              "A next-generation ORM that helps build scalable and reliable database applications with ease.",
            img: "/technologies/drizzle.png",
          },
          {
            title: "Shadcn/ui",
            description:
              "A component library for building UIs with modern design and functionality.",
            img: "/technologies/shadcn.png",
          },
          {
            title: "ClerkAuth",
            description:
              "An authentication solution that provides secure and scalable user management.",
            img: "/technologies/clerk.svg",
          },
        ],
        linkText: "Elevate Your Life with AI",
        link: "https://github.com/RiP3rQ/AI-Butler",
      },
      {
        id: 2,
        title: "NFT Marketplace",
        description:
          "Decentralized platform enabling users to buy, sell, and trade unique digital assets using blockchain technology, ensuring authenticity and ownership through non-fungible tokens (NFTs).",
        img: "/projects/nft_marketplace.png",
        iconLists: [
          {
            title: "NEXT.JS",
            description:
              "A powerful React framework for server-rendered applications and static websites.",
            img: "/technologies/next.svg",
          },
          {
            title: "React",
            description:
              "A JavaScript library for building user interfaces, particularly single-page applications.",
            img: "/technologies/react.svg",
          },
          {
            title: "TailwindCSS",
            description:
              "A utility-first CSS framework for rapidly building custom user interfaces.",
            img: "/technologies/tailwind.svg",
          },
          {
            title: "TypeScript",
            description:
              "A superset of JavaScript that adds static types for better tooling and error checking.",
            img: "/technologies/ts.svg",
          },
          {
            title: "Thirdweb",
            description:
              "A development framework for building Web3 applications with ease.",
            img: "/technologies/thirdweb.png",
          },
          {
            title: "MetaMask",
            description:
              "A cryptocurrency wallet enabling interactions with the Ethereum blockchain.",
            img: "/technologies/metamask.png",
          },
          {
            title: "Prisma",
            description:
              "An ORM for TypeScript and JavaScript that provides a type-safe database layer.",
            img: "/technologies/prisma.svg",
          },
          {
            title: "MongoDB",
            description:
              "A NoSQL database known for its flexibility and scalability in handling large volumes of data.",
            img: "/technologies/mongodb.svg",
          },
          {
            title: "Shadcn/ui",
            description:
              "A component library for building UIs with modern design and functionality.",
            img: "/technologies/shadcn.png",
          },
        ],
        linkText: "Where Art Meets Blockchain",
        link: "https://github.com/RiP3rQ/NFT-Market-NextJs-V2",
      },
      {
        id: 3,
        title: "E-learning Platform",
        description:
          "An online educational hub facilitating accessible and interactive learning experiences through a user-friendly interface, diverse course offerings, and personalized progress tracking.",
        img: "/projects/lms.png",
        iconLists: [
          {
            title: "NEXT.JS",
            description:
              "A powerful React framework for server-rendered applications and static websites.",
            img: "/technologies/next.svg",
          },
          {
            title: "React",
            description:
              "A JavaScript library for building user interfaces, particularly single-page applications.",
            img: "/technologies/react.svg",
          },
          {
            title: "TailwindCSS",
            description:
              "A utility-first CSS framework for rapidly building custom user interfaces.",
            img: "/technologies/tailwind.svg",
          },
          {
            title: "TypeScript",
            description:
              "A superset of JavaScript that adds static types for better tooling and error checking.",
            img: "/technologies/ts.svg",
          },
          {
            title: "ClerkAuth",
            description:
              "An authentication solution that provides secure and scalable user management.",
            img: "/technologies/clerk.svg",
          },
          {
            title: "Prisma",
            description:
              "An ORM for TypeScript and JavaScript that provides a type-safe database layer.",
            img: "/technologies/prisma.svg",
          },
          {
            title: "MongoDB",
            description:
              "A NoSQL database known for its flexibility and scalability in handling large volumes of data.",
            img: "/technologies/mongodb.svg",
          },
          {
            title: "Shadcn/ui",
            description:
              "A component library for building UIs with modern design and functionality.",
            img: "/technologies/shadcn.png",
          },
          {
            title: "Stripe",
            description:
              "A suite of APIs for handling online payments and transactions.",
            img: "/technologies/stripe.svg",
          },
          {
            title: "MUX",
            description:
              "A platform providing powerful video streaming and analytics tools for developers.",
            img: "/technologies/mux.webp",
          },
        ],
        linkText: "Unlock Your Learning Potential",
        link: "https://github.com/RiP3rQ/Learning-Platform-NextJS",
      },
      {
        id: 4,
        title: "Taskify",
        description:
          "Fullstack NextJs 14 taskify app allowing users to create boards with lists and cards that can speed up process of developing software or just to create notes. This app allows users to organize lists and cards using the Drag n' Drop feature.",
        img: "/projects/taskify.png",
        iconLists: [
          {
            title: "NEXT.JS",
            description:
              "A powerful React framework for server-rendered applications and static websites.",
            img: "/technologies/next.svg",
          },
          {
            title: "React",
            description:
              "A JavaScript library for building user interfaces, particularly single-page applications.",
            img: "/technologies/react.svg",
          },
          {
            title: "TailwindCSS",
            description:
              "A utility-first CSS framework for rapidly building custom user interfaces.",
            img: "/technologies/tailwind.svg",
          },
          {
            title: "TypeScript",
            description:
              "A superset of JavaScript that adds static types for better tooling and error checking.",
            img: "/technologies/ts.svg",
          },
          {
            title: "ClerkAuth",
            description:
              "An authentication solution that provides secure and scalable user management.",
            img: "/technologies/clerk.svg",
          },
          {
            title: "Prisma",
            description:
              "An ORM for TypeScript and JavaScript that provides a type-safe database layer.",
            img: "/technologies/prisma.svg",
          },
          {
            title: "PlanetScale",
            description:
              "A serverless database platform designed for modern applications.",
            img: "/technologies/planetscale.jpg",
          },
          {
            title: "Shadcn/ui",
            description:
              "A component library for building UIs with modern design and functionality.",
            img: "/technologies/shadcn.png",
          },
          {
            title: "Stripe",
            description:
              "A suite of APIs for handling online payments and transactions.",
            img: "/technologies/stripe.svg",
          },
        ],
        linkText: "Achieve More with Less Effort",
        link: "https://github.com/RiP3rQ/Trello-Clone-NextJs-",
      },
    ],
  },

  approach: {
    subTitle: "My",
    mainTitle: "approach",
    phase1: {
      title: "Planning & Strategy",
      order: "Phase 1",
      description:
        "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
      animationSpeed: 5.1,
      containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden",
    },
    phase2: {
      title: "Development & Progress Update",
      order: "Phase 2",
      description:
        "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
      animationSpeed: 3,
      containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ],
      dotSize: 2,
    },
    phase3: {
      title: "Development & Launch",
      order: "Phase 3",
      description:
        "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
      animationSpeed: 3,
      containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
      colors: [[125, 211, 252]],
    },
  },

  footer: {
    title_part1: "Ready to take ",
    title_part2: "your",
    title_part3: " digital presence to the next level?",
    description:
      "Reach out to me today and let's discuss how I can help you achieve your goals.",
    button: "Let's get in touch",
    faq: "Look at FAQ",
    autograph: "Handcrafted by RiP3rQ @ 2024",
  },

  sheets: {
    selectors: {
      Contact: "Contact",
      AI: "AI",
      FAQ: "FAQ",
    },
    sheetOptions: {
      title: "Sheet Options:",
      options: ["Contact", "FAQ"],
    },
    contactSheet: {
      title: "Send me an email",
      subTitle:
        "Fill the form below and I will get back to you as soon as possible.",
      firstFormElement: {
        title: "Email's title",
        placeholders: [
          "Catchy Title",
          "Breathtaking Title",
          "How to get rich",
          "Clickbait here",
          "Another brilliant idea",
          "The magic starts here",
        ],
      },
      secondFormElement: {
        title: "Your email address",
        placeholders: [
          "superstar@example.com",
          "not_a_robot@domain.com",
          "future_billionaire@world.com",
          "yourname@domain.com",
          "email@inbox.com",
          "hacker@cyberspace.com",
        ],
      },
      thirdFormElement: {
        title: "Your message",
        placeholders: [
          "Write your masterpiece",
          "Share your wisdom",
          "Spill the beans",
          "Tell me your secrets",
          "Unleash your thoughts",
          "Make it epic",
        ],
      },
      button: "Send",
      loadingStates: [
        {
          text: "Compiling puns",
        },
        {
          text: "Debugging life",
        },
        {
          text: "Refactoring coffee",
        },
        {
          text: "Deploying jokes",
        },
        {
          text: "Optimizing memes",
        },
        {
          text: "git push origin master --force",
        },
        {
          text: "PRODUCTION IS ON FIRE!",
        },
      ],
      emailSent: {
        title: "Thanks for your message!",
        subTitle:
          "I will get back to you as soon as possible. In the meantime, feel free to browse around the website or check out the link for my latest project.",
        mainButton: "Check out my latest project",
        cancelButton: "Go back to site",
      },
    },
    faqSheet: {
      title: "FAQ",
      subTitle: "List of frequently asked questions",
      faqs: [
        {
          title: "What motivated you to start coding?",
          message:
            "From a young age, I was fascinated by how technology shapes our world. My curiosity led me to explore coding, and I loved the idea of creating something out of nothing. This passion grew as I started building my own projects and seeing the impact they could have.",
        },
        {
          title: "What kind of commercial projects have you worked on?",
          message:
            "In my six months of commercial experience, I have worked on several projects, including developing a dynamic e-commerce platform using Next.js and integrating it with a custom backend. I also contributed to a SaaS application, focusing on enhancing the user interface and optimizing performance.",
        },
        {
          title: "Why did you choose Next.js as your main framework?",
          message:
            "I chose Next.js because of its powerful features, such as server-side rendering, static site generation, and its seamless integration with React. These features allow for building high-performance, SEO-friendly applications, which are crucial in modern web development.",
        },
        {
          title:
            "What are your long-term career goals as a fullstack developer?",
          message:
            "My long-term goal is to become a lead developer or a fullstack architect, where I can oversee the development process from start to finish. I aim to continually improve my skills, contribute to innovative projects, and mentor junior developers to help them grow in their careers.",
        },
        {
          title:
            "What is your experience with backend technologies and databases?",
          message:
            "I have experience working with Node.js and Express for backend development. For databases, I have used MongoDB and PostgreSQL. I have implemented RESTful APIs, handled database migrations, and worked on authentication and authorization systems.",
        },
        {
          title: "What is your highest level of education?",
          message:
            "I hold a Bachelor's degree in Computer Science, where I gained a strong foundation in algorithms, data structures, and software engineering principles. This education has been instrumental in my ability to write efficient and maintainable code.",
        },
        {
          title:
            "What have you recently learned, and what technologies or skills are you planning to learn next?",
          message:
            "Recently, I have focused on improving my skills in TypeScript, which has greatly enhanced the robustness of my code. Next, I plan to delve into GraphQL to better handle complex data fetching requirements and improve the efficiency of my applications.",
        },
        {
          title:
            "How do you stay updated with the latest trends and updates in Next.js and web development?",
          message:
            "I stay updated by following industry blogs, subscribing to newsletters, and participating in online communities such as Stack Overflow and Reddit. Additionally, I regularly attend webinars and workshops and contribute to open-source projects to keep my skills sharp and current.",
        },
      ],
    },
  },
};
