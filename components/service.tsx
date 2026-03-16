import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "service-01",
    title: "Website Design",
    description:
      "Modern and responsive website design solutions tailored to help businesses build a strong online presence.",
    image: "/services/web-design.jpg",
  },
  {
    id: "service-02",
    title: "Online Applications",
    description:
      "Development of secure and scalable online applications that improve business operations and digital services.",
    image: "/services/web-app.jpg",
  },
  {
    id: "service-03",
    title: "Graphic Design",
    description:
      "Creative graphic design services including branding, logos, marketing materials, and visual content.",
    image: "/services/graphic-design.jpg",
  },
  {
    id: "service-04",
    title: "Printing Solutions",
    description:
      "Professional printing services for marketing materials, business branding, and promotional products.",
    image: "/services/printing.jpg",
  },
  {
    id: "service-05",
    title: "IT Consultancy",
    description:
      "Expert IT consultancy services helping organizations adopt the right technology solutions for growth.",
    image: "/services/consultancy.jpg",
  },
  {
    id: "service-06",
    title: "SEO Optimization",
    description:
      "Search engine optimization services designed to improve website visibility and ranking on search engines.",
    image: "/services/seo.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of digital solutions including
            website development, online applications, design services,
            and technology consultancy.
          </p>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative h-52">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm">
                  {service.description}
                </p>

                <Link
                  href="#"
                  className="inline-block mt-5 text-blue-600 text-sm font-medium hover:underline"
                >
                  Learn More →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 py-16">

        <div className="max-w-5xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold">
            Need a Custom Service?
          </h2>

          <p className="mt-4 opacity-90">
            Contact us today to discuss your project and discover how
            our services can help your business grow.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>

        </div>

      </section>

    </main>
  );
}