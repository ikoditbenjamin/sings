"use client";

import ServicesSection from "@/components/service";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Online Banking System",
    description:
      "A secure banking platform built with Next.js, Node.js and PostgreSQL.",
    image: "/projects/banking.jpg",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    id: 2,
    title: "Election Data Collection App",
    description:
      "Mobile data collection application designed for Uganda’s 2026 elections.",
    image: "/projects/election.jpg",
    tech: ["React", "Mobile App", "API"],
    link: "#",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description:
      "Modern e-commerce platform with product catalog, payments and dashboard.",
    image: "/projects/e-commerce.jpg",
    tech: ["Next.js", "Stripe", "Tailwind"],
    link: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal developer portfolio showcasing projects and skills.",
    image: "/projects/port.jpg",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    id: 5,
    title: "School Management System",
    description:
      "Web platform for managing students, teachers, classes and results.",
    image: "/projects/school.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 6,
    title: "Blog Platform",
    description:
      "Content publishing platform with articles, categories and comments.",
    image: "/projects/blog.jpg",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    link: "#",
  },
  {
    id: 7,
    title: "Movie website",
    description:
      "A modern movie website where users can discover new films, watch trailers, read reviews, and stay updated with the latest entertainment and cinema releases.",
    image: "/projects/movie.jpg",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    link: "#",
  },
  {
    id: 8,
    title: "Investment System",
    description:
      "A modern investment platform designed to help users manage their portfolios and make informed financial decisions.",
    image: "/projects/investment.png",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">

      {/* HERO */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our Projects
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing our experience in
            building modern digital products and web applications.
          </p>

        </div>
      </section>


      {/* FEATURED PROJECT */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-800">

          <div className="relative h-80 md:h-full">
            <Image
              src="/projects/smartdigital.jpg"
              alt="Featured Project"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-10">

            <span className="text-blue-600 font-medium text-sm">
              Featured Project
            </span>

            <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
              Smart Digital Platform
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-4">
              A powerful digital platform designed to streamline
              operations, manage data efficiently, and provide
              real-time insights through modern web technologies.
            </p>

            <Link
              href="#"
              className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
            >
              View Project →
            </Link>

          </div>

        </div>

      </section>


      {/* PROJECT GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100 dark:border-gray-800"
            >

              {/* IMAGE */}
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 dark:bg-gray-800 dark:text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="inline-block mt-5 text-blue-600 text-sm font-medium hover:underline"
                >
                  View Details →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </section>

<ServicesSection />
      {/* CTA */}
      <section className="bg-blue-600 py-16">

        <div className="max-w-5xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold">
            Have a Project in Mind?
          </h2>

          <p className="mt-4 opacity-90">
            Lets work together to create something amazing.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Start a Project
          </Link>

        </div>
 
          
      </section>

    </main>
  );
}