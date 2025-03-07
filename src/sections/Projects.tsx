import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import game from "@/assets/images/game.jpg";
import Restaurant from "@/assets/images/Restaurant.jpg";
import code from "@/assets/images/API.jpg";

const portfolioProjects = [
  {
    company: "static web page",
    year: "Feb 2025",
    title: "Gamehub",
    results: [
      { title: "Next.js" },
      { title: "Typescript" },
      { title: "TailwindCSS" },
      { title: "ChakraUi" },
      { title: "rawg (external api)" },
    ],
    link: "https://gamehub-ashy.vercel.app/",
    image: game,
  },
  {
    company: "Littlelemon",
    year: "Nov 2024",
    title: "Littlelemon Restaurant ",
    results: [
      { title: "Django" },
      { title: "DjangoRestFramework" },
      { title: "MySQL" },
      { title: "HTML & CSS" },
    ],
    link: "https://github.com/Mathias-Kabango3/LittleLemon-Restaurant-Website.git",
    image: Restaurant,
  },
  {
    company: "Littlelemon API",
    year: "June 2024",
    title: "API",
    results: [
      { title: "Python & Django" },
      { title: "Django DRF" },
      { title: "MySQL" },
    ],
    link: "https://github.com/Mathias-Kabango3/LittleLemonApi.git",
    image: code,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world projects
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
          Explore some of the projects I&apos;ve worked on, highlighting my
          skills in backend, frontend, and full-stack development. Each project
          demonstrates my passion for building scalable, user-friendly
          applications.
        </p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative after:content-[''] z-0 after:absolute after:inset-0 after:z-10 overflow-hidden after:outline-2 after:outline after:ring-offset-2 after:rounded-3xl
              after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20">
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}></div>
              <div className=" lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text ">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckIcon className="inline-block size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-8">
                      <span>Vist Live Site</span>
                      <ArrowUpRight />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:max-w-none lg:w-auto
                    "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
