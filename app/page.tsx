import Navbar from "@/src/components/navbar";
import { Container } from "../src/components/conatiner";
import Hero from "@/src/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="items-center h-screen relative
  [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_99.68%,#FFF_100%)]"
    >
      <div className="max-w-5xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
      </div>
      <Container className="">
        <Navbar />
        <Hero />
      </Container>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 h-px w-full bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
        <div className="absolute inset-y-0 right-0 h-px w-full bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
        <div className="max-w-5xl mx-auto p-4">
          <Image
            className="rounded-2xl border border-neutral-200 shadow-2xl w-full object-cover object-left-top mask-b-from-50% to 100% "
            src="/banner.webp"
            height={1000}
            width={1000}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
}

//"flex flex-col
