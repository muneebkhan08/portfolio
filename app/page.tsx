import Hero from "@/components/main/Hero";
import Encryption from "@/components/sub/Encryption";
import Skills from "@/components/sub/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Skills />
        <Encryption />
        
      </div>
    </main>
  );
}