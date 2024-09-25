import darkSaasLandingPage from "@/assets/Images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/Images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/Images/ai-startup-landing-page.png";
// import { li } from "framer-motion/client";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowUpRightIcon, CheckCircleIcon } from "lucide-react";
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
  <section className="pb-16 sm:pt-96 sm:mt-10 md:pt-10 lg:pt-0 lg:mt-3 h-auto">
    <div className="container w-full">
        <div className="flex justify-center ">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                Real_wolrd Projects
            </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4">See how I transformed concepts </p>
        <div className="flex flex-col mt-10 gap-20">
            {portfolioProjects.map(project => (
                <div key={project.title} 
                    className="bg-gray-800 rounded-3xl relative z-0 after:z-10 overflow-hidden 
                    after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2
                    after:rounded-3xl px-8 pt-8 after:pointer-events-none"
                    >
                        {/* <div className="absolute inset-0 -z-10 opacity-5"
                        style={{
                            backgroundImage : `url(${grainImage.src})`
                        }}></div> */}
                        <div className="bg-gradient-to-r from-emerald-300 to-sky-400
                        inline-flex font-bold uppercase tracking-widest text-sm
                        text-transparent bg-clip-text px-8 pt-8">
                            <span>{project.company}</span>
                            <span>&bull;</span>
                            <span>{project.year}</span>
                        </div>
                    <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4" />
                    <ul className="flex flex-col gap-4 mt-4">
                        {project.results.map((result , index) => (
                            <li key={index} className="flex gap-2 text-sm text-white/50">
                                <CheckCircleIcon className="size-5" />
                                <span>{result.title}</span>
                            </li>
                        ))}
                    </ul>
                    <a href={project.link}>
                        <Button className="inline-flex items-center justify-center gap-2 mt-8 h-12 w-full rounded-xl font-semibold"> 
                            <span>Live Site</span>
                            <ArrowUpRightIcon className="size-4" />
                        </Button>
                    </a>
                    <Image src={project.image} alt={project.title}
                    className="mt-8  -mb-4"
                     />
                </div>
            ))}
        </div>
    </div>
    </section>
)
};
