export default function ServicesSection() {
  const services = [
    {
      title: "IT Security & System Management",
      desc: "Protect your systems with secure networks, data protection, and reliable IT support.",
    },
    {
      title: "Software & App Development",
      desc: "We build modern websites and applications tailored to your business needs.",
    },
    {
      title: "Graphics & Digital Design",
      desc: "Create powerful brand identities with professional graphic design solutions.",
    },
    {
      title: "Computer Training",
      desc: "Gain practical digital skills through hands-on training programs.",
    },
    {
      title: "IT Consultancy",
      desc: "Get expert advice to improve your systems, operations, and digital strategy.",
    },
    {
      title: "Loan & Financial Services",
      desc: "Access flexible and reliable financial support to grow your business.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            We provide reliable IT solutions, training, and financial services to help individuals and businesses grow in Kampala and across Uganda.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-500 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}