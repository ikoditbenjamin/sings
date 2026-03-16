"use client";
import React, { useState } from "react";
import { Activity, Clock, Cpu, Layers, BarChart3, Zap } from "lucide-react";

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  category: string;
}

const features: Feature[] = [
  {
    name: "Computer Training",
    description:
      "Provide fundamental computer skills training, covering operating systems, internet usage, and essential applications.",
    icon: Activity,
    gradient: "from-purple-500 to-indigo-600",
    category: "Training",
  },
  {
    name: "Software & Hardware Services",
    description:
      "Install, configure & troubleshoot software applications, hardware training and troubleshooting including operating systems, productivity software, and hardware components.",
    icon: Cpu,
    gradient: "from-blue-500 to-cyan-500",
    category: "IT Services",
  },
  {
    name: "Graphics Designing",
    description:
      "A showcase of my graphic design projects highlighting creativity, branding, and visual communication skills.",
    icon: Clock,
    gradient: "from-emerald-500 to-green-500",
    category: "Design",
  },
  {
    name: "System Architecture & Website Design",
    description:
      "Modern website design, responsive development, web applications, SEO optimization, and innovative digital solutions built to deliver great user experiences.",
    icon: Layers,
    gradient: "from-amber-500 to-orange-500",
    category: "Web Design",
  },
  {
    name: "Printing Solutions, Online Applications and IT Consultancy",
    description:
      "Professional printing solutions, modern online application development, and expert IT consultancy services to help businesses enhance their brand and embrace digital transformation.",
    icon: Zap,
    gradient: "from-rose-500 to-pink-600",
    category: "Consultancy",
  },
  {
    name: "Loan & Financing",
    description:
      "Flexible loan and financing solutions that help individuals and businesses access funds and achieve financial goals.",
    icon: BarChart3,
    gradient: "from-cyan-500 to-sky-600",
    category: "Finance",
  },
];

export default function FeatureSectionThree() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="bg-white dark:bg-gray-950 py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-indigo-500 to-transparent self-center"></div>
            <h2 className="mx-4 text-base font-semibold text-indigo-600 uppercase tracking-wide">
              TroyTech Features
            </h2>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-indigo-500 to-transparent self-center"></div>
          </div>

          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="relative">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Powerful Capabilities
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 blur-sm"></span>
            </span>{" "}
            for Modern Future
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Computer Training, Software Installation, Hardware Services,
            Website Designing, Hosting, Mobile Apps, Phone Flashing & Updates,
            Computer Repair, Graphics Designing, Printing Solutions, CCTV
            Installation, Network Setup, Data Recovery, IT Consultancy,
            Loans & Financing, and more.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              onMouseEnter={() => setHoveredCard(feature.name)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mr-10 -mt-10 rounded-full bg-gradient-to-br opacity-10 blur-xl from-indigo-600 to-purple-600"></div>

              <div className="p-6">
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-900/40 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300">
                    {feature.category}
                  </span>
                </div>

                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-md mb-5`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.name}
                </h3>

                <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>

                <div className="mt-5 inline-flex h-8 items-center text-sm font-medium text-indigo-600">
                  <span>Learn more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      hoveredCard === feature.name ? "translate-x-1" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} transition-all duration-500 ease-out ${
                  hoveredCard === feature.name ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex rounded-full bg-indigo-50 dark:bg-gray-800 p-1">
            <button className="rounded-full bg-white dark:bg-gray-700 px-4 py-2.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              View documentation
            </button>
            <button className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Get started
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}