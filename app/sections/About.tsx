"use client";

export default function About() {
  return (
    <section className="relative w-full py-28 bg-black text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-purple-600/10 blur-[140px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* 🔥 LEFT (PROFILE CARD) */}
        <div className="flex justify-center items-center relative">

          {/* Glow */}
          <div className="absolute w-[320px] h-[320px] bg-purple-500/10 blur-3xl rounded-full" />

          {/* Card */}
          <div className="relative w-[260px] h-[320px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(168,85,247,0.15)] transition hover:scale-[1.03]">

            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-2xl font-bold">
              AB
            </div>

            {/* Name */}
            <h3 className="mt-4 text-2xl font-semibold">
              Anabala Balaji
            </h3>

            {/* Role */}
            <p className="text-lg text-gray-400 mt-1">
              Web Developer
            </p>

            {/* Tag */}
            <div className="mt-4 px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              Helping Local Businesses Grow 🚀
            </div>

          </div>
        </div>

        {/* 🔥 RIGHT (CONTENT) */}
        <div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Helping Businesses Grow Online 🚀
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">
            I build modern, fast, and user-friendly websites designed to help local businesses attract more customers and grow online.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed text-lg">
            My focus is not just design — but creating websites that actually bring results, whether it’s more leads, better visibility, or increased sales.
          </p>

          {/* 🔥 Trust Points */}
          <div className="mt-6 space-y-2 text-md text-gray-300">
            <p>✔ Focus on real business needs</p>
            <p>✔ Clean and modern UI</p>
            <p>✔ Fast and responsive websites</p>
            <p>✔ Simple and smooth process</p>
          </div>

          {/* 🔥 CTA */}
          <div className="mt-8">
            <a href="#contact">
              <button className="bg-white cursor-pointer text-black px-6 py-3 rounded-xl hover:scale-105 transition font-medium shadow-lg">
                Let’s Work Together
              </button>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}