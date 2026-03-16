"use client";

import Image from "next/image";
import Link from "next/link";

const loans = [
  {
    title: "Personal Loan",
    description:
      "Flexible personal loans designed to help you manage unexpected expenses or achieve your goals.",
    image: "/loans/personal.jpg",
  },
  {
    title: "Business Loan",
    description:
      "Empowering entrepreneurs with capital to grow and scale their businesses.",
    image: "/loans/business.jpg",
  },
  {
    title: "Education Loan",
    description:
      "Invest in your future with education loans that support your academic journey.",
    image: "/loans/education.jpg",
  },
  {
    title: "Home Loan",
    description:
      "Affordable home financing solutions to help you own your dream house.",
    image: "/loans/home.jpg",
  },
];

const steps = [
  {
    title: "Apply Online",
    desc: "Complete a quick online application form to get started.",
  },
  {
    title: "Verification",
    desc: "Our team verifies your details and reviews your eligibility.",
  },
  {
    title: "Approval",
    desc: "Get fast loan approval once your application is reviewed.",
  },
  {
    title: "Receive Funds",
    desc: "Funds are securely transferred to your account.",
  },
];

export default function LoanPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">

      {/* HERO */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Loans & Financing
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore flexible loan solutions designed to support your
            personal, business, and financial goals.
          </p>

        </div>
      </section>

      {/* FEATURED LOAN */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-800">

          <div className="relative h-80 md:h-full">
            <Image
              src="/loans/fast.jpg"
              alt="Featured Loan"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-10">

            <span className="text-blue-600 text-sm font-medium">
              Featured Offer
            </span>

            <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
              Fast Personal Loans
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Get quick access to funds with our simple personal loan
              application process and flexible repayment options.
            </p>

            <Link
              href="#"
              className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
            >
              Apply Now →
            </Link>

          </div>

        </div>

      </section>

      {/* LOAN TYPES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Loan Services
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Choose the loan option that best fits your needs.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {loans.map((loan, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100 dark:border-gray-800"
            >

              <div className="relative h-48">
                <Image
                  src={loan.image}
                  alt={loan.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {loan.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                  {loan.description}
                </p>

                <Link
                  href="#"
                  className="inline-block mt-4 text-blue-600 text-sm font-medium hover:underline"
                >
                  Learn More →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* LOAN PROCESS */}
      <section className="bg-white dark:bg-gray-900 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Simple Loan Process
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-3">
              Apply for a loan in just a few easy steps.
            </p>

          </div>

          <div className="grid gap-10 md:grid-cols-4">

            {steps.map((step, index) => (
              <div key={index} className="text-center">

                <div className="w-14 h-14 flex items-center justify-center mx-auto bg-blue-600 text-white rounded-full text-lg font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">

        <div className="max-w-5xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Apply for a Loan?
          </h2>

          <p className="mt-4 opacity-90">
            Start your loan application today and get access to the
            financial support you need.
          </p>

          <Link
            href="#"
            className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Apply Now
          </Link>

        </div>

      </section>

    </main>
  );
}