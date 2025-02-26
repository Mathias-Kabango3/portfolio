import memoji from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import dev from "@/assets/images/Dev.png";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-24" id="home">
      <div className="container">
        <div className=" flex flex-col items-center">
          <Image src={dev} alt="open and close tags" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-lg">
            <div className="">
              <h1 className="text-xl font-semibold bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent font-serif tracking-widest">
                &ldquo;Hi, I&apos;m Mathias Kabango!&rdquo;{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Junior Software Engineer
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
            <span className="font-semibold">
              <a href="https://github.com/Mathias-Kabango3">Explore my work</a>
            </span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span></span>
            <span className="font-semibold">
              <a href="mailto:kabangomathias0@gmail.com">
                👋Let&apos;s Connect
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
