export const data = {
  navbar: {
    profile: {
      slug: "RiP3rQ",
      title: "Rafał 'RiP3rQ' Pompa",
      description:
        "Przekształcanie koncepcji w pełni funkcjonalne, kompleksowe rozwiązania jako Programista Full-Stack.",
      image: "/avatar.png",
      link: "https://github.com/RiP3rQ",
      dateText: "Tworzenie oprogramowania od lutego 2020",
    },
    github: {
      slug: "Github",
      title: "Github",
      description: "Zobacz moje projekty i wkład na Githubie.",
      image: "/socials/git.svg",
      link: "https://github.com/RiP3rQ",
      dateText: "Dołączył w lipcu 2022",
    },
    linkedin: {
      slug: "LinkedIn",
      title: "LinkedIn",
      description:
        "Połącz się ze mną na LinkedIn w celu nawiązania kontaktów zawodowych.",
      image: "/linkedin.png",
      link: "https://www.linkedin.com/in/rafalpompa00/",
      dateText: "Dołączył w grudniu 2023",
    },
    contact: {
      slug: "Contact",
      title: "Kontakt",
    },
  },

  hero: {
    subTitle: "TWORZENIE ROZWIĄZAŃ BIZNESOWYCH WRAZ Z NEXT.JS",
    mainTitle: "Tworzenie Dynamicznych, Kompleksowych Rozwiązań",
    description:
      "Cześć! Jestem Rafał, doświadczony Fullstack Developer Next.js z Polski. Z pasją do przekształcania innowacyjnych pomysłów w efektywne i angażujące aplikacje internetowe, specjalizuję się w dostarczaniu solidnych rozwiązań, które napędzają sukces.",
    button: "Połączmy się",
  },

  bentoGrid: [
    {
      id: 1,
      title: "Łączenie Frontendu i Backendu dla Bezproblemowej Integracji",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-start max-w-full",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "Przekształcanie Pomysłów w Solidne Rozwiązania Cyfrowe",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Mój stos technologiczny:",
      description: "Stale staram się go ulepszać",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Wspieranie Innowacji Poprzez Ekspercką Wiedzę Full-Stack.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "absolute right-0 bottom-0 w-60",
      titleClassName: "justify-start",
      img: "/b4.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 5,
      title: "Obecnie buduję projekty AI Next i uczę się RUST.",
      description: "Ciekawostki",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Chcesz rozpocząć projekt razem?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
      contactButtonName: "Skopiuj mój e-mail",
    },
  ],

  projects: {
    title_noColor: "Mały wybór",
    title_color: "najnowszych projektów",
    projects: [
      {
        id: 1,
        title: "AI-Butler",
        description:
          "AI-Butler to innowacyjny projekt, który wykorzystuje sztuczną inteligencję jako wirtualnego asystenta. Od prostego notowania po dostarczanie inteligentnych wniosków na podstawie kontekstu. Tworzy notatki zawierające wartościowe informacje, które AI analizuje i wykorzystuje ich kontekst do tworzenia własnych odpowiedzi. Jeśli odpowiadanie na pytania na podstawie kontekstu notatek to za mało, możesz bezpośrednio zapytać model OpenAI.",
        img: "/projects/aibutler.png",
        iconLists: [
          {
            title: "NEXT.JS",
            description:
              "Potężny framework React do aplikacji renderowanych po stronie serwera i stron statycznych.",
            img: "/technologies/next.svg",
          },
          {
            title: "React",
            description:
              "Biblioteka JavaScript do budowania interfejsów użytkownika.",
            img: "/technologies/react.svg",
          },
          {
            title: "TailwindCSS",
            description:
              "Framework CSS umożliwiający szybkie tworzenie stylów za pomocą klas narzędziowych.",
            img: "/technologies/tailwind.svg",
          },
          {
            title: "TypeScript",
            description:
              "Język programowania będący nadzbiorem JavaScript, oferujący statyczne typowanie.",
            img: "/technologies/ts.svg",
          },
          {
            title: "OpenAI",
            description:
              "Laboratorium badawcze oferujące zaawansowane modele AI do analizy i generowania języka naturalnego.",
            img: "/technologies/openai.png",
          },
          {
            title: "PineconeDB",
            description:
              "Baza danych wektorowych do przechowywania i wyszukiwania danych wysokowymiarowych.",
            img: "/technologies/pinecone.png",
          },
          {
            title: "NeonDB",
            description:
              "Nowoczesna, bezserwerowa baza danych Postgres zaprojektowana dla chmury.",
            img: "/technologies/neon.png",
          },
          {
            title: "DrizzleORM",
            description:
              "ORM dla TypeScript i JavaScript zapewniający bezpieczną warstwę dostępu do bazy danych.",
            img: "/technologies/drizzle.png",
          },
          {
            title: "Shadcn/ui",
            description: "Biblioteka komponentów UI z nowoczesnym designem.",
            img: "/technologies/shadcn.png",
          },
          {
            title: "ClerkAuth",
            description:
              "Rozwiązanie do zarządzania uwierzytelnianiem użytkowników, zapewniające bezpieczeństwo i skalowalność.",
            img: "/technologies/clerk.svg",
          },
        ],
        linkText: "Podnieś swoje życie z AI",
        link: "https://github.com/RiP3rQ/AI-Butler",
      },
      {
        id: 2,
        title: "NFT Marketplace",
        description:
          "Zdecentralizowana platforma umożliwiająca użytkownikom kupowanie, sprzedawanie i wymianę unikalnych aktywów cyfrowych przy użyciu technologii blockchain, zapewniająca autentyczność i własność poprzez tokeny niewymienne (NFT).",
        img: "/projects/nft_marketplace.png",
        iconLists: [
          {
            title: "NEXT.JS",
            description:
              "Potężny framework React do aplikacji renderowanych po stronie serwera i stron statycznych.",
            img: "/technologies/next.svg",
          },
          {
            title: "React",
            description:
              "Biblioteka JavaScript do budowania interfejsów użytkownika.",
            img: "/technologies/react.svg",
          },
          {
            title: "TailwindCSS",
            description:
              "Framework CSS umożliwiający szybkie tworzenie stylów za pomocą klas narzędziowych.",
            img: "/technologies/tailwind.svg",
          },
          {
            title: "TypeScript",
            description:
              "Język programowania będący nadzbiorem JavaScript, oferujący statyczne typowanie.",
            img: "/technologies/ts.svg",
          },
          {
            title: "Thirdweb",
            description:
              "Framework do tworzenia aplikacji Web3, ułatwiający integrację z blockchain.",
            img: "/technologies/thirdweb.png",
          },
          {
            title: "MetaMask",
            description:
              "Portfel kryptowalutowy umożliwiający interakcje z blockchainem Ethereum.",
            img: "/technologies/metamask.png",
          },
          {
            title: "Prisma",
            description:
              "Nowoczesny ORM wspierający budowanie skalowalnych aplikacji bazodanowych.",
            img: "/technologies/prisma.svg",
          },
          {
            title: "MongoDB",
            description: "Elastyczna i skalowalna baza danych NoSQL.",
            img: "/technologies/mongodb.svg",
          },
          {
            title: "Shadcn/ui",
            description: "Biblioteka komponentów UI z nowoczesnym designem.",
            img: "/technologies/shadcn.png",
          },
        ],
        linkText: "Gdzie sztuka spotyka blockchain",
        link: "https://github.com/RiP3rQ/NFT-Market-NextJs-V2",
      },
      {
        id: 3,
        title: "Platforma e-learningowa",
        description:
          "Internetowe centrum edukacyjne ułatwiające dostępne i interaktywne doświadczenia edukacyjne poprzez przyjazny interfejs, różnorodność oferowanych kursów i spersonalizowane śledzenie postępów.",
        img: "/projects/lms.png",
        iconLists: [
          {
            title: "NEXT.JS",
            description:
              "Potężny framework React do aplikacji renderowanych po stronie serwera i stron statycznych.",
            img: "/technologies/next.svg",
          },
          {
            title: "React",
            description:
              "Biblioteka JavaScript do budowania interfejsów użytkownika.",
            img: "/technologies/react.svg",
          },
          {
            title: "TailwindCSS",
            description:
              "Framework CSS umożliwiający szybkie tworzenie stylów za pomocą klas narzędziowych.",
            img: "/technologies/tailwind.svg",
          },
          {
            title: "TypeScript",
            description:
              "Język programowania będący nadzbiorem JavaScript, oferujący statyczne typowanie.",
            img: "/technologies/ts.svg",
          },
          {
            title: "ClerkAuth",
            description:
              "Rozwiązanie do zarządzania uwierzytelnianiem użytkowników, zapewniające bezpieczeństwo i skalowalność.",
            img: "/technologies/clerk.svg",
          },
          {
            title: "Prisma",
            description:
              "Nowoczesny ORM wspierający budowanie skalowalnych aplikacji bazodanowych.",
            img: "/technologies/prisma.svg",
          },
          {
            title: "MongoDB",
            description: "Elastyczna i skalowalna baza danych NoSQL.",
            img: "/technologies/mongodb.svg",
          },
          {
            title: "Shadcn/ui",
            description: "Biblioteka komponentów UI z nowoczesnym designem.",
            img: "/technologies/shadcn.png",
          },
          {
            title: "Stripe",
            description: "Zestaw API do obsługi płatności online.",
            img: "/technologies/stripe.svg",
          },
          {
            title: "MUX",
            description:
              "Platforma oferująca narzędzia do streamingu wideo i analityki.",
            img: "/technologies/mux.webp",
          },
        ],
        linkText: "Odblokuj swój potencjał edukacyjny",
        link: "https://github.com/RiP3rQ/Learning-Platform-NextJS",
      },
      {
        id: 4,
        title: "Taskify",
        description:
          "Pełnostackowa aplikacja NextJs 14 Taskify pozwalająca użytkownikom tworzyć tablice z listami i kartami, które mogą przyspieszyć proces tworzenia oprogramowania lub po prostu tworzyć notatki. Ta aplikacja pozwala użytkownikom organizować listy i karty za pomocą funkcji przeciągnij i upuść.",
        img: "/projects/taskify.png",
        iconLists: [
          {
            title: "NEXT.JS",
            description:
              "Potężny framework React do aplikacji renderowanych po stronie serwera i stron statycznych.",
            img: "/technologies/next.svg",
          },
          {
            title: "React",
            description:
              "Biblioteka JavaScript do budowania interfejsów użytkownika.",
            img: "/technologies/react.svg",
          },
          {
            title: "TailwindCSS",
            description:
              "Framework CSS umożliwiający szybkie tworzenie stylów za pomocą klas narzędziowych.",
            img: "/technologies/tailwind.svg",
          },
          {
            title: "TypeScript",
            description:
              "Język programowania będący nadzbiorem JavaScript, oferujący statyczne typowanie.",
            img: "/technologies/ts.svg",
          },
          {
            title: "ClerkAuth",
            description:
              "Rozwiązanie do zarządzania uwierzytelnianiem użytkowników, zapewniające bezpieczeństwo i skalowalność.",
            img: "/technologies/clerk.svg",
          },
          {
            title: "Prisma",
            description:
              "Nowoczesny ORM wspierający budowanie skalowalnych aplikacji bazodanowych.",
            img: "/technologies/prisma.svg",
          },
          {
            title: "PlanetScale",
            description:
              "Bezserwerowa platforma bazodanowa zaprojektowana dla nowoczesnych aplikacji.",
            img: "/technologies/planetscale.jpg",
          },
          {
            title: "Shadcn/ui",
            description: "Biblioteka komponentów UI z nowoczesnym designem.",
            img: "/technologies/shadcn.png",
          },
          {
            title: "Stripe",
            description: "Zestaw API do obsługi płatności online.",
            img: "/technologies/stripe.svg",
          },
        ],
        linkText: "Osiągnij więcej przy mniejszym wysiłku",
        link: "https://github.com/RiP3rQ/Trello-Clone-NextJs-",
      },
    ],
  },

  approach: {
    subTitle: "Mój",
    mainTitle: "sposób działania",
    phase1: {
      title: "Planowanie i Strategia",
      order: "Krok 1",
      description:
        "Będziemy współpracować, aby określić cele Twojej strony internetowej, grupę docelową oraz kluczowe funkcjonalności. Omówimy strukturę strony, nawigację oraz wymagania dotyczące treści.",
      animationSpeed: 5.1,
      containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden",
    },
    phase2: {
      title: "Rozwój i Aktualizacja Postępów",
      order: "Krok 2",
      description:
        "Po zatwierdzeniu planu, włączam moją playlistę lofi i wkraczam w kodowanie. Od początkowych szkiców po dopracowany kod, będę informować Cię na każdym etapie postępu.",
      animationSpeed: 3,
      containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ],
      dotSize: 2,
    },
    phase3: {
      title: "Rozwój i Uruchomienie",
      order: "Krok 3",
      description:
        "To miejsce, gdzie dzieje się magia! Na podstawie zatwierdzonego projektu przetłumaczę wszystko na funkcjonalny kod, budując Twoją stronę od podstaw.",
      animationSpeed: 3,
      containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
      colors: [[125, 211, 252]],
    },
  },

  footer: {
    title_part1: "Gotowy, by zabrać ",
    title_part2: " swoją",
    title_part3: " cyfrową obecność na wyższy poziom?",
    description:
      "Skontaktuj się ze mną jeszcze dziś, aby omówić, jak mogę pomóc Ci osiągnąć swoje cele.",
    button: "Nawiąż kontakt",
    faq: "Sprawdź najczęstsze pytania",
    autograph: "Stworzone przez RiP3rQ @ 2024",
  },

  sheets: {
    selectors: {
      Contact: "Kontakt",
      AI: "AI",
      FAQ: "FAQ",
    },
    sheetOptions: {
      title: "Wybór arkusza:",
      options: ["Kontakt", "FAQ"],
    },
    contactSheet: {
      title: "Wyślij mi e-mail",
      subTitle:
        "Wypełnij poniższy formularz, a ja skontaktuję się z Tobą tak szybko, jak to możliwe.",

      firstFormElement: {
        title: "Tytuł e-maila",
        placeholders: [
          "Chwytliwy tytuł",
          "Tytuł e-maila",
          "Epicka linia tematu",
          "To nie jest spam, obiecuję",
          "Uczyń to intrygującym",
        ],
      },
      secondFormElement: {
        title: "Twój adres e-mail",
        placeholders: [
          "Twój najlepszy email",
          "Nie twój służbowy email",
          "no-reply@twojadomena.com",
          "Zdecydowanie prawdziwy email",
          "twoje.imie@smiesznapoczta.com",
        ],
      },
      thirdFormElement: {
        title: "Twoja wiadomość",
        placeholders: [
          "Wpisz swoje myśli",
          "Twoje genialne myśli",
          "Drogi pamiętniku...",
          "Uczyń to niezapomnianym",
          "Wstaw tu zabawną wiadomość",
        ],
      },
      button: "Wyślij",
      loadingStates: [
        {
          text: "Kompilowanie dowcipów",
        },
        {
          text: "Debugowanie życia",
        },
        {
          text: "Refaktoryzacja kawy",
        },
        {
          text: "Wdrażanie żartów",
        },
        {
          text: "Optymalizacja memów",
        },
        {
          text: "git push origin master --force",
        },
        {
          text: "PRODUKCJA SIĘ PALI!",
        },
      ],
      emailSent: {
        title: "Dziękuję za Twoją wiadomość!",
        subTitle:
          "Skontaktuję się z Tobą tak szybko, jak to możliwe. W międzyczasie, zachęcam do przeglądania strony lub sprawdzenia linku do mojego najnowszego projektu.",
        mainButton: "Sprawdź mój najnowszy projekt",
        cancelButton: "Wróć do strony",
      },
    },
    faqSheet: {
      title: "FAQ",
      subTitle: "Lista najczęściej zadawanych pytań",
      faqs: [
        {
          title: "Co zmotywowało Cię do rozpoczęcia kodowania?",
          message:
            "Od najmłodszych lat fascynowało mnie, jak technologia kształtuje nasz świat. Moja ciekawość doprowadziła mnie do eksploracji kodowania i pokochałem ideę tworzenia czegoś z niczego. Ta pasja rosła, gdy zacząłem budować własne projekty i dostrzegać ich wpływ.",
        },
        {
          title: "Nad jakimi projektami komercyjnymi pracowałeś?",
          message:
            "W ciągu sześciu miesięcy doświadczenia komercyjnego pracowałem nad kilkoma projektami, w tym nad rozwijaniem dynamicznej platformy e-commerce przy użyciu Next.js i integracją jej z niestandardowym backendem. Przyczyniłem się również do tworzenia aplikacji SaaS, skupiając się na ulepszaniu interfejsu użytkownika i optymalizacji wydajności.",
        },
        {
          title: "Dlaczego wybrałeś Next.js jako główny framework?",
          message:
            "Wybrałem Next.js ze względu na jego potężne funkcje, takie jak renderowanie po stronie serwera, generowanie statycznych stron i bezproblemową integrację z React. Te funkcje umożliwiają budowanie wydajnych, przyjaznych SEO aplikacji, co jest kluczowe we współczesnym web developmencie.",
        },
        {
          title:
            "Jakie są Twoje długoterminowe cele zawodowe jako fullstack developer?",
          message:
            "Moim długoterminowym celem jest zostać głównym deweloperem lub architektem fullstack, gdzie będę mógł nadzorować proces tworzenia oprogramowania od początku do końca. Dążę do ciągłego doskonalenia swoich umiejętności, uczestnictwa w innowacyjnych projektach oraz mentorowania młodszych deweloperów, aby pomóc im rozwijać się zawodowo.",
        },
        {
          title:
            "Jakie masz doświadczenie w technologiach backendowych i bazach danych?",
          message:
            "Mam doświadczenie w pracy z Node.js i Express w zakresie developmentu backendu. Jeśli chodzi o bazy danych, korzystałem z MongoDB i PostgreSQL. Implementowałem RESTful API, zarządzałem migracjami bazy danych oraz pracowałem nad systemami uwierzytelniania i autoryzacji.",
        },
        {
          title: "Jakie jest Twoje najwyższe wykształcenie?",
          message:
            "Posiadam tytuł licencjata w dziedzinie informatyki, gdzie zdobyłem solidne podstawy w algorytmach, strukturach danych i zasadach inżynierii oprogramowania. To wykształcenie było kluczowe w mojej zdolności do pisania wydajnego i łatwego do utrzymania kodu.",
        },
        {
          title:
            "Czego ostatnio się nauczyłeś i jakie technologie lub umiejętności planujesz się nauczyć?",
          message:
            "Ostatnio skupiłem się na doskonaleniu swoich umiejętności w TypeScript, co znacznie zwiększyło solidność mojego kodu. Następnie planuję zgłębić GraphQL, aby lepiej radzić sobie ze złożonymi wymaganiami dotyczącymi pobierania danych i poprawić wydajność moich aplikacji.",
        },
        {
          title:
            "Jak pozostajesz na bieżąco z najnowszymi trendami i aktualizacjami w Next.js i web developmencie?",
          message:
            "Pozostaję na bieżąco, śledząc branżowe blogi, subskrybując newslettery i uczestnicząc w społecznościach online, takich jak Stack Overflow i Reddit. Dodatkowo regularnie uczestniczę w webinarach i warsztatach oraz przyczyniam się do projektów open-source, aby utrzymać swoje umiejętności na wysokim poziomie i aktualne.",
        },
      ],
    },
  },
};
