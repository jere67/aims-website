import Hero from "@/components/Hero";
import People from "@/components/People";
import Roadmap from "@/components/ResearchFocus";
import News from "@/components/News";
import WorldMap from "@/components/Map";
import Teachings from "@/components/Teachings";
import Sponsors from "@/components/Sponsors";
import Gallery from "@/components/Gallery";
import JoinUs from "@/components/JoinUs";
import Videos from "@/components/Videos";
import FloatingTop from "@/components/FloatingTop";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <News />
        <Roadmap />
        <Videos />
        <People />
        <WorldMap />
        <Teachings />
        <Sponsors />
        <Gallery />
        <JoinUs />
        <FloatingTop />
      </div>
    </main>
  );
}
