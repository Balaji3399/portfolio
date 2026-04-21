"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-28 bg-black text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold">
          Let’s Build Your Website 🚀
        </h2>

        <p className="mt-4 text-gray-400 text-lg">
          Tell me about your business. I’ll help you get more customers online.
        </p>

        {/* 🔥 Primary CTA */}
        <div className="mt-10">
          <a
            href="https://wa.me/918309240976?text=Hi%20I%20need%20a%20website"
            target="_blank"
          >
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition shadow-lg hover:scale-105 cursor-pointer">
              Chat on WhatsApp
            </button>
          </a>
        </div>

        {/* Secondary */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center text-sm text-gray-400">

          <a href="tel:+918309240976" className="hover:text-white transition text-lg">
            📞 Call: +91 8309240976
          </a>

          <a href="mailto:anabalabalaji@gmail.com" className="hover:text-white transition text-lg">
            📧 Email: anabalabalaji@gmail.com
          </a>

        </div>

        {/* Trust */}
        <p className="mt-6 text-md text-gray-500">
          Usually replies within a few minutes 🚀
        </p>

      </div>
    </section>
  );
}