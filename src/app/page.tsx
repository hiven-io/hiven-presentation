import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { DiscoverFeed } from "@/components/sections/DiscoverFeed";
import { SocialFeed } from "@/components/sections/SocialFeed";
import { LiveMap } from "@/components/sections/LiveMap";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Screenshow } from "@/components/sections/Screenshow";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <DiscoverFeed />
        <SocialFeed />
        <LiveMap />
        <Stats />
        <HowItWorks />
        <Screenshow />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
