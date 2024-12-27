"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Solutions = () => {
  type Solution = {
    title: string;
    description: string;
    status: string;
  };

  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  const solutions = [
    {
      title: "Proctoring Platform for Olympiads",
      description:
        "A robust, cloud-based platform designed to ensure fairness and integrity for remote Olympiad competitions. This solution is tailored to meet the unique challenges of large-scale academic testing environments.",
      status: "In Development",
    },
  ];

  const openModal = (solution: Solution) => setSelectedSolution(solution);
  const closeModal = () => setSelectedSolution(null);

  return (
    <main className="bg-gradient-to-b from-[#2e2e2e] to-[#1a1a1a] min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col pl-16 justify-center h-screen">
        <div className="max-w-4xl">
          <h1 className="font-extrabold text-6xl mb-6">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#008000] to-[#fff4d3]">
              Solutions
            </span>
          </h1>
          <p className="flex items-center text-lg text-gray-300">
            As a 501(c)(3) not-for-profit organization, Horizon Labs works to
            develop specialized platforms that address pressing needs in
            various academic and competitive fields.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="flex flex-col pl-16 py-16">
        <div className="max-w-5xl">
          <h2 className="font-bold text-3xl mb-8">
            What We{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#42b25e] to-[#17f64f]">
              Offer
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <motion.div
                key={solution.title}
                whileHover={{ scale: 1.05 }}
                onClick={() => openModal(solution)}
                className="bg-zinc-900 rounded-lg p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-purple-500 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-300">{solution.description}</p>
                <p className="text-sm text-gray-500 mt-2">{solution.status}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-zinc-800 rounded-lg max-w-md w-full p-8 text-white relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              Close
            </button>
            <h3 className="text-2xl font-semibold mb-4">
              {selectedSolution.title}
            </h3>
            <p className="mb-6">{selectedSolution.description}</p>
            <p className="text-sm text-gray-500">Status: {selectedSolution.status}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Solutions;
