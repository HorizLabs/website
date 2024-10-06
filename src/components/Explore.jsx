import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Diamond, Code, Rocket, Flask, GlobeHemisphereEast, Lightbulb } from "@phosphor-icons/react";
import { Link } from 'react-scroll';
import {Zap, Cpu } from 'lucide-react';


export function Explore() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (    
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
            <SponsorBar />
            <About />
            <Divisions />
            <News />
            <Services />
        </div>
    );
}

function SponsorBar() {
    const icons = [
        <Code size={48} />,
        <Diamond size={48} />,
        <Rocket size={48} />,
        <Flask size={48} />,
        <GlobeHemisphereEast size={48} />,
        <Lightbulb size={48} />
    ];

    return (
        <div className="bg-blue-800">
            <h2 className="text-3xl font-bold text-center pt-6 mb-6 text-white bg-gradient-to-b from-blue-700 to-blue-800">Sponsors</h2>
            <div className="relative overflow-hidden h-16 bg-blue-800">
                <div className="flex animate-scroll">
                    {icons.map((icon, index) => (
                        <div key={index} className="flex items-center justify-center flex-shrink-0 w-[250px] h-16 text-white">
                            {icon}
                        </div>
                    ))}
                    {icons.map((icon, index) => (
                        <div key={`duplicate-${index}`} className="flex items-center justify-center flex-shrink-0 w-[250px] h-16 text-white">
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-80 bg-gradient-to-b from-blue-800 to-blue-900"></div>
        </div>
    );
}

function About() {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-blue-900 to-gray-700 dark:from-blue-900 dark:to-blue-900 text-white">
            <div className="container mx-auto px-6">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-bold mb-8 text-center"
                >
                    About Horizon Labs
                </motion.h2>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <p className="text-xl mb-6">
                        Horizon Labs is a parent company to multiple non-profit organizations, united in our mission to empower individuals through computer science and research.
                    </p>
                    <p className="text-lg mb-6">
                        Our flagship project, "Horizon," is an open-source platform designed to revolutionize test management and administration. It enables individuals and organizations to efficiently manage and take tests, fostering a new era of accessible and streamlined assessment processes.
                    </p>
                    <p className="text-lg">
                        At Horizon Labs, we believe in the power of open collaboration. All our projects, including the Horizon platform, are open-source, inviting developers and enthusiasts worldwide to contribute, innovate, and shape the future of educational technology.
                    </p>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid md:grid-cols-3 gap-8 mt-12"
                >
                    <FeatureCard 
                        icon={<Code size={40} />}
                        title="Open-Source Innovation"
                        description="We develop cutting-edge, open-source software solutions for testing and assessment."
                    />
                    <FeatureCard 
                        icon={<Flask size={40} />}
                        title="Research & Development"
                        description="Our team conducts groundbreaking research to advance educational technology."
                    />
                    <FeatureCard 
                        icon={<Rocket size={40} />}
                        title="Community Empowerment"
                        description="We foster a global community of developers and educators to drive innovation."
                    />
                </motion.div>
            </div>
            <div className="h-60"></div>
        </section>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-gray-800 dark:text-white"
        >
            <div className="text-blue-600 dark:text-blue-400 mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </motion.div>
    );
}

function Divisions() {
    return (
    <section id="divisions" className="py-20 bg-gradient-to-b from-blue-900 to-blue-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center text-blue-600 dark:text-white">
                    Explore our Divisions
                    <Diamond className="ml-2 w-8 h-8 text-blue-600 dark:text-blue-400" />
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <DivisionCard 
                        title="Software"
                        icon={<Code size={40} />}
                        link="/software"
                    />
                    <DivisionCard 
                        title="IRPO"
                        icon={<GlobeHemisphereEast size={40} />}
                        link="/irpo"
                    />
                    <DivisionCard 
                        title="Research"
                        icon={<Lightbulb size={40} />}
                        link="/research"
                    />
                </div>
            </div>
            <div className="h-60"></div>
        </section>
    );
}

function DivisionCard({ title, icon, link }) {
    return (
        <div className="transform transition-all duration-300 ease-in-out hover:scale-105">
            <a 
                href={link} 
                className="block p-6 rounded-lg shadow-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 ease-in-out"
            >
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 mr-4 flex items-center justify-center">{icon}</div>
                    <h3 className="text-2xl font-bold">Horizon</h3>
                </div>
                <h4 className="text-4xl font-semibold">{title}</h4>
            </a>
        </div>
    );
}

function News() {
    return (
        <section id="news" className="py-20 bg-blue-900">
            <div className="mt-16">
                <h3 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-white">Latest News</h3>
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <p className="text-white text-center">
                        Stay tuned for the latest news and press releases from Horizon Labs. 
                        We're working on integrating our news feed directly into this section.
                    </p>
                </div>
            </div>
            <div className="h-60"></div>
        </section>
    );
}

function Services() {
    const services = [
        { icon: <Code />, name: "Web Development", description: "Cutting-edge web solutions" },
        { icon: <Diamond />, name: "UI/UX Design", description: "Beautiful, intuitive interfaces" },
        { icon: <Rocket />, name: "App Development", description: "Powerful mobile applications" },
        { icon: <Flask />, name: "Data Science", description: "Insights from your data" },
        { icon: <GlobeHemisphereEast />, name: "Cloud Services", description: "Scalable cloud solutions" },
        { icon: <Lightbulb />, name: "Consulting", description: "Expert tech guidance" },
        { icon: <Zap />, name: "DevOps", description: "Streamlined development operations" },
        { icon: <Cpu />, name: "AI Solutions", description: "Intelligent automated systems" }
    ];

    return (
        <section id="services" className="py-20 bg-gradient-to-b from-blue-900 to-gray-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold mb-12 text-center text-white animate-fade-in">
                    Our Services
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slide-up"
                            style={{animationDelay: `${index * 100}ms`}}
                        >
                            <div className="text-blue-400 mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
