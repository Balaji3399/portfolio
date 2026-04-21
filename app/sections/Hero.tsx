"use client";

import MagicRings from "@/components/MagicRings";
import CardNav from "@/components/CardNav";
import CurvedLoop from "@/components/CurvedLoop";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <CardNav
          logo="ANABALA BALAJI"
          items={[
            {
              label: "Home",
              bgColor: "#111",
              textColor: "#fff",
              links: [{ label: "Go to Home", href: "#", ariaLabel: "Navigate to home" }]
            },
            {
              label: "Projects",
              bgColor: "#111",
              textColor: "#fff",
              links: [{ label: "View Projects", href: "#projects", ariaLabel: "Navigate to projects" }]
            },
            {
              label: "Services",
              bgColor: "#111",
              textColor: "#fff",
              links: [{ label: "View Services", href: "#services", ariaLabel: "Navigate to services" }]
            },
            {
              label: "Contact",
              bgColor: "#111",
              textColor: "#fff",
              links: [{ label: "Contact Me", href: "#contact", ariaLabel: "Navigate to contact" }]
            }
          ]}
          baseColor="rgba(255,255,255,0.1)"
          menuColor="#ffffff"
          buttonBgColor="#fff"
          buttonTextColor="#000"
        />
      </div>

      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <MagicRings />
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I Build Websites That Bring Customers to Your Business 🚀
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Helping local businesses grow online with fast, affordable, and high-converting websites.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          
          <a href="https://wa.me/918309240976?text=Hi%20I%20need%20a%20website">
            <button className="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition">
              Get Your Website
            </button>
          </a>

          <a href="#projects">
            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              View My Work
            </button>
          </a>

        </div>
      </div>
        
      {/* 🔥 Bottom Curved Loop (NEW POSITION) */}
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[100%] max-w-4xl   ">
        <CurvedLoop
          marqueeText="Websites ✦ Landing Pages ✦ Business Growth ✦ Freelance Services ✦ "
          speed={1.2}
          curveAmount={100}
          direction="left"
          interactive={true}
          className="text-white"
        />
      </div>

    </section>
  );
}