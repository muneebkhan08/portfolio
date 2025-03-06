// import Hero from "@/components/main/Hero";
// import ContactForm from "@/components/sub/ContactForm";
// import Encryption from "@/components/sub/Encryption";
// import Skills from "@/components/sub/Skills";

// export default function Home() {
//   return (
//     <main className="h-full w-full">
//       <div className="flex flex-col gap-20">
//         <Hero/>
//         <Skills />
//         <Encryption />

//         <div className="mt-[40rem]">
//         <ContactForm />
//         </div>
        
//       </div>
//     </main>
//   );
// }

import Hero from "@/components/main/Hero";
import {CanvasReveal} from "@/components/sub/CanvasReveal";
import ContactForm from "@/components/sub/ContactForm";
import Encryption from "@/components/sub/Encryption";
import Footer from "@/components/sub/Footer";
import Skills from "@/components/sub/Skills";
import Typewrite from "@/components/sub/Typewrite";
import Connect from "@/components/sub/Connect";
import { WorldMapDemo } from "@/components/sub/WorldMapDemo";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />

        <CanvasReveal />

        <Connect />

        <WorldMapDemo />

        <Typewrite />

        
        
        <Footer />
      </div>
    </main>
  );
}
