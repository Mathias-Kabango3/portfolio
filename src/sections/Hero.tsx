import memoji from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-24">
      <div className="container">
        <div className=" flex flex-col items-center">
          <Image src={memoji} alt="a person picking" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Open to new projects and collaborations
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Crafting Outstanding Digital Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            {" "}
            I specialize in building scalable, user-centric web applications
            with modern JavaScript frameworks, TypeScript, and backend
            technologies like Node.js and Django
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span></span>
            <span className="font-semibold">👋Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
