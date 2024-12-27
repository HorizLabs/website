"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Legal = () => {
  interface Document {
    title: string;
    description: string;
    href: string;
    updated: string;
  }

  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  const documents = [
    {
      title: "Bylaws",
      description:
        "The structure and core rules that govern Horizon Labs as a recognized non-profit organization.",
      href: "/bylaws.pdf",
      updated: "Last updated: 2024",
    },
    {
      title: "Conflict of Interest Policy",
      description:
        "Our policy to safeguard objectivity and transparency in all organizational decisions and collaborations.",
      href: "/conflict-of-interest.pdf",
      updated: "Last updated: 2024",
    },
  ];

  const openModal = (doc: Document) => setSelectedDoc(doc);
  const closeModal = () => setSelectedDoc(null);

  return (
    <main className="bg-gradient-to-b from-[#1b1b1b] to-[#0e0e0e] min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col pl-16 justify-center h-screen">
        <div className="max-w-4xl">
          <h1 className="font-extrabold text-6xl mb-6">
            Legal{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#acfefd] to-[#fba8ff]">
              Documentation
            </span>
          </h1>
          <p className="flex items-center text-lg text-gray-300">
            As a 501(c)(3) not-for-profit organization, Horizon Labs is
            committed to transparency and rigorous standards. You can review
            our official documents below.
          </p>
        </div>
      </section>

      {/* Legal Docs Section */}
      <section className="flex flex-col pl-16 py-16">
        <div className="max-w-5xl">
          <h2 className="font-bold text-3xl mb-8">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#42b25e] to-[#17f64f]">
              Legal Documents
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((doc) => (
              <motion.div
                key={doc.title}
                whileHover={{ scale: 1.05 }}
                onClick={() => openModal(doc)}
                className="bg-zinc-900 rounded-lg p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-blue-500 mb-2">
                  {doc.title}
                </h3>
                <p className="text-gray-300">{doc.description}</p>
                <p className="text-sm text-gray-500 mt-2">{doc.updated}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-zinc-800 rounded-lg max-w-md w-full p-8 text-white relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              Close
            </button>
            <h3 className="text-2xl font-semibold mb-4">{selectedDoc.title}</h3>
            <p className="mb-6">{selectedDoc.description}</p>
            <Link
              href={selectedDoc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-transform transform hover:scale-105"
            >
              View / Download
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default Legal;
