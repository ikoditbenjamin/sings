"use client";

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "How to Build a Modern Next.js Website",
    desc: "Learn how to create fast and scalable web applications using Next.js and Tailwind CSS.",
    image: "/blogs/modern-next.jpg",
    category: "Development",
    date: "March 10, 2026",
    slug: "#",
  },
  {
    id: 2,
    title: "Designing Beautiful UI with Tailwind CSS",
    desc: "Tailwind CSS makes it easy to design responsive and modern interfaces.",
    image: "/blogs/ui.jpg",
    category: "Design",
    date: "March 5, 2026",
    slug: "#",
  },
  {
    id: 3,
    title: "Understanding React Components",
    desc: "A beginner-friendly guide to reusable components in React.",
    image: "/blogs/react.jpg",
    category: "React",
    date: "March 1, 2026",
    slug: "#",
  },
  {
    id: 4,
    title: "Building a Portfolio Website",
    desc: "Step-by-step guide to building a professional developer portfolio.",
    image: "/blogs/portfolio.jpg",
    category: "Career",
    date: "Feb 20, 2026",
    slug: "#",
  },
  {
    id: 5,
    title: "Deploying Next.js Apps",
    desc: "Learn how to deploy your Next.js projects to production.",
    image: "/blogs/deploy.jpg",
    category: "Deployment",
    date: "Feb 15, 2026",
    slug: "#",
  },
  {
    id: 6,
    title: "Optimizing Website Performance",
    desc: "Improve speed and performance of your web applications.",
    image: "/blogs/seo.jpg",
    category: "Performance",
    date: "Feb 10, 2026",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">

      {/* HERO */}
      <section className="bg-white dark:bg-gray-900 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our Blog
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and resources about web development,
            design, and technology.
          </p>

        </div>
      </section>


      {/* FEATURED POST */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-800">

          <div className="relative h-72 md:h-full">
            <Image
              src="/blogs/future.jpg"
              alt="featured"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">

            <span className="text-sm text-blue-600 font-medium">
              Featured
            </span>

            <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
              The Future of Web Development
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Explore the trends shaping the future of web development,
              including AI-powered apps, server components, and faster
              frameworks.
            </p>

            <Link
              href="#"
              className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
            >
              Read Article →
            </Link>

          </div>

        </div>

      </section>


      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100 dark:border-gray-800"
            >

              {/* Image */}
              <div className="relative h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <span className="text-xs text-blue-600 font-semibold">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
                  {post.desc}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {post.date}
                  </span>

                  <Link
                    href={post.slug}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Read →
                  </Link>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

    </main>
  );
}