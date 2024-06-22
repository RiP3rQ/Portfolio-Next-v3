import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Grid from "@/components/grid";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-transparent relative">
      <Navbar />

      {/* MIDDLE NAVBAR BLACKHOLE */}
      <div className="w-full h-[1000px] flex flex-col opacity-0 dark:opacity-100 absolute top-0">
        <div className="h-full w-full relative">
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-450px] w-full h-full object-cover"
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <div className="max-w-7xl flex flex-col items-center justify-center mx-auto">
        <Hero />

        <Grid />
      </div>
    </main>
  );
}
