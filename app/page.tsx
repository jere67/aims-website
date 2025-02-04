import Hero from "@/components/Hero";
import People from "@/components/People";
import Roadmap from "@/components/ResearchFocus";
import News from "@/components/News";
import WorldMap from "@/components/Map";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-8xl w-full">
        <Hero />
        <News />
        <Roadmap />
        <People />
        <WorldMap />
      </div>
    </main>
  );
}
