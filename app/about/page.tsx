"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="bg-gradient-to-b from-[#1b1b1b] to-[#0e0e0e] min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col pl-16 justify-center h-screen">
        <div className="max-w-4xl">
          <h1 className="font-extrabold text-6xl mb-6">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ff0000] to-[#00FFFF]">
              Horizon Labs
            </span>
          </h1>
          <p className="flex items-center text-lg text-gray-300">
            Horizon Labs is an interdisciplinary community that bridges the gap between Science and Technology within Computational subfields. As a 501(c)(3) non-profit organization, we are dedicated to advancing educational technology through innovative research, collaborative projects, and community-driven initiatives.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="flex flex-col pl-16 py-16">
        <div className="max-w-5xl">
          <h2 className="font-bold text-3xl mb-8">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#42b25e] to-[#17f64f]">
              Mission
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Our mission is to empower students and organizations by developing cutting-edge software solutions, designing and conducting educational programs, and conducting research that benefits the public. We strive to create a collaborative environment where interdisciplinary approaches lead to meaningful advancements in both scientific research and technological applications.
          </p>
          <p className="text-lg text-gray-300">
            Horizon Labs is committed to fostering a community where individuals can contribute to projects that make a real impact. We believe in the power of collective effort and are continuously refining our ideas to better serve educational and scientific communities.
          </p>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="flex flex-col pl-16 py-16 bg-zinc-900">
        <div className="max-w-5xl">
          <h2 className="font-bold text-3xl mb-8">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#42b25e] to-[#17f64f]">
              Programs
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 rounded-lg p-6 shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-500 mb-2">
                International Research and Programming Olympiad (IRPO)
              </h3>
              <p className="text-gray-300">
                IRPO is a pilot competition designed to integrate foundational scientific research skills with programming. Focused initially on Physics, the Olympiad encourages critical thinking and problem-solving, preparing participants for future scientific and technological endeavors.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 rounded-lg p-6 shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-500 mb-2">
                Research Initiatives
              </h3>
              <p className="text-gray-300">
                Our research initiatives aim to develop innovative solutions in educational technology. By collaborating with experts and leveraging interdisciplinary approaches, we strive to advance the fields of Science and Technology for the benefit of the community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="flex flex-col pl-16 py-16">
        <div className="max-w-5xl">
          <h2 className="font-bold text-3xl mb-8">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#42b25e] to-[#17f64f]">
              Team
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Horizon Labs is led by a dedicated board committed to driving our mission forward. While our team is currently small, we are actively seeking passionate individuals to join us in various roles, including development, design, and program administration. Together, we aim to create impactful projects and foster a thriving community.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="flex flex-col pl-16 py-16 bg-zinc-900">
        <div className="max-w-5xl">
          <h2 className="font-bold text-3xl mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#42b25e] to-[#17f64f]">
              Coming Soon
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Horizon Labs is continuously evolving. Stay connected with us for updates on new research projects, upcoming competitions, and opportunities to get involved. Together, we can make a difference in the world of Science and Technology.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
