import darkSaasLandingPage from "@/assets/Images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/Images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/Images/ai-startup-landing-page.png";
// import { li } from "framer-motion/client";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowUpRightIcon, CheckCircleIcon } from "lucide-react";
import { PinContainer } from "./ui/3d-pin";
// import grainImage from "../assets/Images/grain.jpg"
const portfolioProjects = [
  {
    company: "",
    year: "2024",
    title: "AI Trip Planner",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16  sm:pt-96 sm:mt-10 md:pt-10  lg:mt-3 h-auto z-50 ">
      <div className="container w-full">
        <div className="flex justify-center ">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
            Real_wolrd Projects
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center md:text-5xl mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts{" "}
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl z-0 after:z-10 overflow-hidden 
                    after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2
                    after:rounded-3xl px-8 pt-8 md:pt-12 lg:pt-16 lg:px-20 md:px-10 after:pointer-events-none
                    sticky "
              style={{ top: `${96 + index * 60}px` }}
            >
              {/* <div className="absolute inset-0 -z-10 opacity-5"
                        style={{
                            backgroundImage : `url(${grainImage.src})`
                        }}></div> */}
              <div className="lg:grid lg:grid-cols-2 gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400
                        inline-flex font-bold uppercase tracking-widest text-sm
                        text-transparent bg-clip-text px-8 pt-8"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <Button className="inline-flex md:w-auto px-6 items-center justify-center gap-2 mt-8 h-12 w-full rounded-xl font-semibold">
                      <span>Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </Button>
                  </a>
                </div>
                <div className="relative">
                  <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                  >
                    <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem]  ">
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        {project.title}
                      </h3>
                      <div className=" ">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                        />
                      </div>
                    </div>
                  </PinContainer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
