"use client";

import { useState } from "react";
import CardSwap, { Card } from "@/components/CardSwap";

const projects = [
  {
    title: "Restaurant Website",
    desc: "Online menu, table booking & customer engagement system.",
    tag: "Local Business",
    image: "/restaurant.png",
    link: "https://balaji3399.github.io/RestaurantBussiness/"
  },
  {
    title: "Portfolio Website",
    desc: "Personal branding & high-conversion landing page.",
    tag: "Freelancer",
    image: "/portfolio.png",
    link: "#"
  },
  {
    title: "Academic School",
    desc: "A Complete Website for School with faculty , chairs , course and Syllabus Details.",
    tag: "Education",
    image: "/school.png",
    link: "https://balaji3399.github.io/school-website/"
  },
  {
    title: "Portfolio Website",
    desc: "Personal branding & high-conversion landing page.",
    tag: "Freelancer",
    image: "/portfolio.png",
    link: "#"
  }
];

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="projects"
      className="relative w-full py-28 bg-black text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-purple-600/10 blur-[140px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl  ">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Websites That Drive Real Business Results
          </h2>

          <p className="mt-4 text-gray-400 text-lg">
            Designed for local businesses to attract customers and grow online.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-6 max-w-md order-2 md:order-1 text-center md:text-left">
            <h3 className="text-lg md:text-5xl font-bold transition-all duration-300">
              {projects[active].title}
            </h3>

            <p className="text-sm md:text-base text-gray-400 transition-all duration-300">
              {projects[active].desc}
            </p>

            <a
              href={projects[active].link}
              className="inline-block text-purple-400 hover:underline mt-2"
            >
              View Live →
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-1 md:order-2 mt-32">
            
            {/* ✅ SCALE CONTROL (NO HYDRATION ISSUE) */}
            <div className="scale-[0.75] sm:scale-[0.65] md:scale-100 origin-center">
              
              <CardSwap
                width={380}
                height={240}
                cardDistance={55}
                verticalDistance={65}
                delay={2500}
                pauseOnHover
                skewAmount={5}
                easing="linear"
                onActiveChange={setActive}
              >
                {projects.map((project, i) => (
                  <Card
                    key={i}
                    customClass="group bg-white/5 backdrop-blur-xl border border-white/50 overflow-hidden flex flex-col transition duration-300 hover:scale-[1.05] hover:border-purple-400/40"
                  >
                    {/* IMAGE */}
                    <div className="relative h-28 md:h-36 w-full overflow-hidden">

                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  </div>

                    {/* CONTENT */}
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {project.desc}
                        </p>
                      </div>

                      <span className="text-xs text-purple-400 mt-2">
                        {project.tag}
                      </span>
                    </div>
                  </Card>
                ))}
              </CardSwap>

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-2 md:mt-2 flex ">
          <a href="https://wa.me/918309240976?text=Hi%20I%20need%20a%20website">
            <button className="bg-white text-black px-8 py-3 rounded-xl hover:scale-125 transition font-medium shadow-lg">
              Get Your Website Now
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}