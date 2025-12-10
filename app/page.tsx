"use client";

import { useRef } from "react";
import Background from "@/components/ui/Background";
import Section1 from "@/components/Sections/Section1";
import Section2 from "@/components/Sections/Section2";
import Section3 from "@/components/Sections/Section3";
import Section4 from "@/components/Sections/Section4";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <Background scrollContainerRef={containerRef}>
      <main
        ref={containerRef}
        className="z-20 relative h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory"
      >
        <Section1 scrollContainerRef={containerRef} />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </Background>
  );
}