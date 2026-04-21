"use client";

import SpotlightCard from "@/components/SpotlightCard";

export default function Services() {
  return (
    <section id="services" className="relative w-full py-28 bg-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Services That Help Your Business Grow 🚀
          </h2>

          <p className="mt-4 text-gray-400 text-lg">
            I build fast, modern websites designed to attract customers and increase your revenue.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          <SpotlightCard>
            <h3 className="text-3xl font-semibold">
              Business Website
            </h3>

            <p className="text-gray-400 mt-3 text-lg leading-relaxed">
              Perfect for shops, restaurants, and local businesses to showcase services and attract customers online.
            </p>

            <ul className="mt-5 text-md text-gray-300 space-y-2">
              <li>✔ Mobile-friendly design</li>
              <li>✔ WhatsApp integration</li>
              <li>✔ Fast loading speed</li>
            </ul>

            <div className="mt-6 text-purple-400 text-md font-medium">
              Best for local businesses →
            </div>
          </SpotlightCard>

          <SpotlightCard>
            <h3 className="text-3xl font-semibold">
              Landing Pages
            </h3>

            <p className="text-gray-400 mt-3 text-lg leading-relaxed">
              High-converting pages for ads, campaigns, and promotions to generate leads and boost sales.
            </p>

            <ul className="mt-5 text-md text-gray-300 space-y-2">
              <li>✔ Conversion-focused design</li>
              <li>✔ Lead capture forms</li>
              <li>✔ SEO optimized</li>
            </ul>

            <div className="mt-6 text-purple-400 text-md font-medium">
              Perfect for ads & campaigns →
            </div>
          </SpotlightCard>

          <SpotlightCard>
            <h3 className="text-3xl font-semibold">
              Website Redesign
            </h3>

            <p className="text-gray-400 mt-3 text-md leading-relaxed">
              Upgrade your existing website to a modern, fast, and user-friendly experience.
            </p>

            <ul className="mt-5 text-md text-gray-300 space-y-2">
              <li>✔ UI/UX improvements</li>
              <li>✔ Performance boost</li>
              <li>✔ Modern design upgrade</li>
            </ul>

            <div className="mt-6 text-purple-400 text-md font-medium">
              Transform your old website →
            </div>
          </SpotlightCard>

        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <a href="https://wa.me/919876543210?text=Hi%20I%20need%20a%20website">
            <button className="bg-white text-black px-8 py-3  rounded-xl hover:scale-110 cursor-pointer transition font-medium shadow-lg">
              Let’s Build Your Website
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}