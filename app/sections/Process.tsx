"use client";

import { useEffect, useState } from "react";

export default function Process() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      title: "Discussion",
      desc: "We understand your business, goals, and what you need from the website."
    },
    {
      title: "Design",
      desc: "I create a modern, clean design focused on user experience and conversions."
    },
    {
      title: "Development",
      desc: "Your website is built fast, responsive, and optimized for performance."
    },
    {
      title: "Delivery",
      desc: "Website goes live with support and guidance for your business growth."
    }
  ];

  // 🔥 Auto progression (premium feel)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-28 bg-black text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-purple-600/10 blur-[140px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Simple Process. Powerful Results.
          </h2>

          <p className="mt-4 text-gray-400 text-lg">
            A smooth and transparent workflow to bring your business online.
          </p>
        </div>

        {/* Stepper */}
        <div className="mt-20 relative">

          {/* 🔥 Full visible line */}
          <div className="absolute top-6 left-0 w-full h-[2px] bg-purple-500/60" />

          {/* Animated highlight line */}
          <div
            className="absolute top-6 left-0 h-[2px] bg-purple-400 transition-all duration-500"
            style={{ width: `${((active + 1) / steps.length) * 100}%` }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative">

            {steps.map((step, i) => {
              const isActive = active === i;

              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center"
                >
                  {/* 🔥 Filled Circle ALWAYS */}
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500
                    ${
                      isActive
                        ? "bg-purple-500 border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.8)] scale-110"
                        : "bg-purple-500/80 border-purple-400/50"
                    }`}
                  >
                    <span className="text-sm font-semibold">
                      {i + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`mt-6 text-2xl font-semibold transition-all duration-500
                    ${isActive ? "text-purple-400 scale-105" : "text-white"}
                    `}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-md mt-2 max-w-[200px] transition-all duration-500
                    ${isActive ? "text-gray-300" : "text-gray-400"}
                    `}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <a href="https://wa.me/918309240976?text=Hi%20I%20need%20a%20website">
            <button className="bg-white cursor-pointer text-black px-8 py-3 rounded-xl hover:scale-105 transition font-medium shadow-lg">
              Start Your Project
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}