import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import NavBar from "@/components/NavBar";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${jetBrainsMono.className}`}>
      <main className="flex flex-col flex-grow min-h-screen">
        <NavBar />
        <div className="h-28" />
        <div id="hero" className="w-full flex justify-center items-center flex-grow px-4 sm:px-36">
          <div id="hero-content" className="flex flex-col sm:flex-row flex-grow justify-center items-center gap-4 sm:gap-28">
            <h1 className="text-5xl sm:text-6xl font-medium max-w-2xl">Building projects without the subscriptions</h1>
            <Image src={"/Technologies.png"} alt="Technologies" width={512} height={512} priority={true} />
          </div>
        </div>
      </main>
    </div>
  );
}
