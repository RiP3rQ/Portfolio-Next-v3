import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Grid from "@/components/grid";
import Projects from "@/components/projects";
import Approach from "@/components/approach";
import Footer from "@/components/footer";
import BlackholeVideo from "@/components/blackhole-video";
import { TracingBeam } from "@/components/ui/Aceternity/TracingBeam";
import { LanguageToggle } from "@/components/language/language-toggle";
import React from "react"; // TODO: TRANSALTIONS

// TODO: TRANSALTIONS
// TODO: AI ASSISNTANT
// TODO: CONTACT FORM - current
// TODO: RESEND EMAIL
// TODO: LOADING EMAIL SEND STATUS
// TODO: RESPONSIVENESS
// TODO: MOBILE NAVBAR

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-transparent relative">
      <Navbar />
      <BlackholeVideo />
      <Hero />

      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto">
        <TracingBeam>
          <Grid />

          <Projects />

          <Approach />

          <Footer />
        </TracingBeam>
      </div>
      {/* Lang provider*/}
      <div className="fixed bottom-4 right-6 z-50">
        <LanguageToggle />
      </div>
    </main>
  );
}
