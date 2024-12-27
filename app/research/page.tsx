"use client";

import { motion } from "framer-motion";

const Research = () => {
  return (
    <main className="bg-gradient-to-b from-[#1b1b1b] to-[#0e0e0e] min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col pl-16 justify-center h-screen">
        <div className="max-w-4xl">
          <h1 className="font-extrabold text-6xl mb-6">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#325ffd] to-[#fba8ff]">
              Research
            </span>
          </h1>
          <p className="flex items-center text-lg text-gray-300">
            As a 501(c)(3) not-for-profit organization, Horizon Labs is also dedicated to advancing developments in the sciences for the benefit of the public through our research.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="flex flex-col pl-16 py-16">
        <div className="max-w-5xl">
          <h2 className="font-bold text-3xl mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#42b25e] to-[#17f64f]">
              Coming Soon
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            We are currently developing our research initiatives. Stay connected to learn more.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Research;
