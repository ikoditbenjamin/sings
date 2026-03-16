import {
  ArrowRightIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export default function Innovation() {
  return (
    <div className="relative isolate pt-24 lg:pt-0 z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 lg:min-h-screen">

            {/* Left column - Content */}
            <div className="flex flex-col justify-center px-6 py-12 lg:px-8 lg:py-24">

              <div className="inline-flex items-center px-3 py-1 text-sm font-mono font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 rounded-full mb-8 self-start">
                <BoltIcon className="w-4 h-4 mr-1 text-cyan-400" />
                {/* BUG FIX: fixed typo "Innovatioin" → "Innovation" */}
                Introducing Computer Innovation 2.0
              </div>

              {/*
                BUG FIX: The original h1 had two conflicting font-size classes:
                text-4xl, text-xl, text-4xl — the inner span was text-xl which made
                it very small. Corrected to use text-lg for the subtitle span.
              */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-700 tracking-tight leading-tight">
                Learn IT With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                  TroyTech
                </span>
              </h1>

              <p className="mt-4 text-lg text-emerald-500/100 font-mono max-w-lg leading-relaxed">
                Experience technology learning like never before. Practical,
                hands-on IT knowledge to build real-world digital skills and
                succeed in the tech industry.
              </p>

              <p className="mt-4 text-base text-gray-500 max-w-lg">
                Our platform helps you turn complex concepts into clear,
                actionable skills with AI-powered guidance and real-time
                project dashboards.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1.5 rounded-md bg-emerald-950 border border-emerald-800/50">
                    <ShieldCheckIcon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold text-cyan-400">
                      IT security and compliance
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Keep your data safe with enterprise-grade security features
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1.5 rounded-md bg-emerald-950 border border-emerald-800/50">
                    <BoltIcon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold text-cyan-400">
                      Lightning-fast performance
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Analyze billions of data points in seconds, not hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1.5 rounded-md bg-emerald-950 border border-emerald-800/50">
                    <ChartBarIcon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-semibold text-cyan-400">
                      AI-powered insights
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Get predictive recommendations that help you stay ahead
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                {/* BUG FIX: replaced bg-gradient shorthand error with explicit bg-gradient-to-r */}
                <a
                  href="mailto:ikoditbenjamin9@gmail.com"
                  className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-base font-mono font-medium text-gray-950 shadow-lg hover:shadow-[0_0_30px_rgba(0,255,128,0.35)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-950 transition-all duration-200 flex-none w-full sm:w-auto text-center"
                >
                  Get started for free
                </a>
                <a
                   href="https://wa.me/256782391512?text=Hello%20TroyTech%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20IT%20courses.%20Could%20you%20please%20provide%20me%20with%20more%20information%3F"
                    target="_blank"
                  className="rounded-full px-6 py-3 text-base font-mono font-medium text-emerald-400 ring-1 ring-emerald-800 hover:bg-emerald-950/60 transition-all duration-200 flex items-center justify-center gap-x-2 flex-none w-full sm:w-auto"
                >
                  Talk to TroyTech
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>

              <p className="mt-8 text-sm text-gray-600 font-mono">
                2,500+ companies already using TroyTech
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-6 w-20 bg-emerald-950/60 border border-emerald-900/40 rounded"
                  />
                ))}
              </div>
            </div>

            {/* Right column - Image */}
            <div className="relative flex items-center justify-center lg:h-auto">
              {/* BUG FIX: replaced broken bg-gradient (was "bg-transparent" effectively) with proper dark gradient */}
              <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gradient-to-tr from-emerald-950/40 to-cyan-950/30 z-0 lg:block hidden" />

              <div className="relative z-10 px-6 py-12 lg:px-8 lg:py-0 flex items-center justify-center w-full h-full">
                <div className="relative w-full max-w-lg xl:max-w-xl">
                  {/* Glowing border effect around image */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl opacity-20 blur-sm" />
                  <img
                    src="/programmer.jpg"
                    alt="Programmer"
                    className="relative w-full rounded-xl h-[80%] shadow-2xl object-cover object-center border border-emerald-900/50"
                  />
                </div>

                {/* Floating stats card */}
                <div className="absolute -bottom-6 right-6 bg-gray-900 border border-emerald-800/50 rounded-lg shadow-[0_0_20px_rgba(0,255,128,0.1)] p-4 flex items-center space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <ChartBarIcon className="h-6 w-6 text-gray-950" />
                  </div>
                  <div>
                    <p className="text-sm font-mono font-medium text-gray-500">
                      IT Growth
                    </p>
                    <p className="text-xl font-bold text-emerald-400 font-mono">
                      +48.2%
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}
