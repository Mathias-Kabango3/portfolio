import Card from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import Book from "@/assets/images/the_one_thing.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import Chrome from "@/assets/icons/chrome.svg";
import Guthub from "@/assets/icons/github.svg";
import CSS3 from "@/assets/icons/css3.svg";
import HTML5 from "@/assets/icons/html5.svg";
import TeckIcon from "@/components/TeckIcon";
import { FaJava, FaPython, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiNestjs,
  SiDocker,
  SiKubernetes,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";

const toolboxIcons = [
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTML5 },
  { title: "CSS3", iconType: CSS3 },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: Chrome },
  { title: "Github", iconType: Guthub },
  { title: "python", iconType: FaPython },
  { title: "Java", iconType: FaJava },
  { title: "NodeJs", iconType: FaNodeJs },
  { title: "Express.js", iconType: SiExpress },
  { title: "Next.js", iconType: SiNextdotjs },
  { title: "NestJS", iconType: SiNestjs },
  { title: "Docker", iconType: SiDocker },
  { title: "Kubernetes", iconType: SiKubernetes },
  { title: "Django", iconType: SiDjango },
  { title: "Tailwind CSS", iconType: SiTailwindcss },
];
export const AboutSection = () => {
  return (
    <div className="pb-20  flex items-center flex-col" id="about">
      <div className="container">
        <h1 className="text-center bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent uppercase text-xl">
          About Me
        </h1>
        <div className="mt-20">
          <Card>
            <div className=" text-sm flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9  text-emerald-300" />
                <h2 className="font-serif text-3xl">Introduction</h2>
              </div>
              <p className="text-sm text-white/90 mt-2">
                I&apos;m Mathias Kabango, a passionate software developer
                dedicated to building impactful, user-centric web applications.
                With expertise in modern JavaScript frameworks, TypeScript, and
                backend technologies like Node.js and Django, I specialize in
                transforming ideas into scalable, high-performance digital
                solutions. <span className="block mb-2"></span>Driven by a
                mission to revolutionize healthcare, education, and business
                solutions, I believe in the power of technology to create
                meaningful change. Whether it&apos;s developing seamless user
                experiences, optimizing backend performance, or scaling
                applications for growth, I&apos;m always ready for the next big
                challenge.
              </p>
            </div>
          </Card>
          <Card>
            <div className=" text-sm flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9  text-emerald-300" />
                <h3 className="font-serif text-3xl">My Reads</h3>
              </div>
              <p className="text-sm text-white/90 mt-2">
                Explore the books shaping my perspective.
              </p>
            </div>
            <div className="w-40 mx-auto mt-8">
              <Image src={Book} alt="book cover"></Image>
            </div>
          </Card>
          <Card>
            <div className=" text-sm flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9  text-emerald-300" />
                <h3 className="font-serif text-3xl">My Toolbox</h3>
              </div>

              <p className="text-sm text-white/90 mt-2">
                Explore the technologies and tools I use to craft exceptional
                digital experiences
              </p>
            </div>
            <div>
              {toolboxIcons.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center pag-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg m-2">
                  <TeckIcon component={item.iconType} />
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
