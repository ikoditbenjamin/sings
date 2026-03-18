
"use client";

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Benjamin Ikodit",
    role: "Founder & Developer",
    image: "/about/benjamin.png",
  },
  {
    name: "Ngobi Owen Albert",
    role: "Lead Developer",
    image: "/about/owen.png",
  },
  {
    name: "Monic Arinaitwe",
    role: "Accountant",
    image: "/about/monic.jpg",
  },
  {
    name: "Irene Asekenye",
    role: "Marketing Manager",
    image: "/about/irene.jpg",
  },
];


export default function AboutPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">

      {/* HERO */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About Us
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We are committed to delivering innovative digital solutions including website design,
            online applications, printing services, and IT consultancy to help businesses and
            individuals succeed in the modern digital world.
          </p>

        </div>
      </section>


      {/* STORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-5 grid md:grid-cols-2 gap-12 items-center">

        <div className="relative h-96">
          <Image
            src="/prog.jpg"
            alt="about"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Our Story
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Our story began with a vision to deliver innovative digital solutions and professional
            services that empower individuals and businesses to succeed in the digital world.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Over the years we have worked with startups, enterprises, and organizations to design
            and develop modern web applications and digital products.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>

        </div>

      </section>


      {/* STATS SECTION */}
      <section className="bg-white dark:bg-gray-900 py-16 transition-colors">

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold text-blue-600">20+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Projects Completed
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">80+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Happy Clients
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">5+</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Team Members
            </p>
          </div>

        </div>

      </section>


      {/* TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Meet Our Team
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            The talented people behind our success
          </p>

        </div>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition text-center p-6 border border-gray-100 dark:border-gray-800"
            >

              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="mt-4 font-semibold text-lg text-gray-900 dark:text-white">
                {member.name}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {member.role}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* CTA SECTION */}
      <section className="bg-blue-600 py-16">

        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold">
            Lets Build Something Great Together
          </h2>

          <p className="mt-4 opacity-90">
            Have a project in mind? We would love to hear from you.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get In Touch
          </Link>

        </div>

      </section>

    </main>
  );
}