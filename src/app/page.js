"use client"; 

import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* Metadata for Title and Favicon */}
      <Head>
        <title>Future of Work Consortium</title>
        <meta name="description" content="Shaping the Future of Work" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dwa3soopc/image/upload/v1741593349/WhatsApp_Image_2025-02-03_at_18.40.33_1_hq6arb.jpg"
        />
      </Head>

      <div className="bg-white text-gray-900">
        {/* Navigation Bar */}
        <header className="sticky top-0 bg-white shadow-md z-10">
          <nav className="container mx-auto flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/dwa3soopc/image/upload/v1741593349/WhatsApp_Image_2025-02-03_at_18.40.33_1_hq6arb.jpg"
                alt="Logo"
                className="w-16 h-16 rounded-full"
              />
              <div className="font-bold text-xl">Future of Work Consortium</div>
            </div>
            <ul className="flex space-x-6">
              <li className="relative group">
                <button className="text-gray-900">Industries</button>
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-lg z-10 hidden group-hover:block">
                  {[
                    "Care Economy",
                    "Gig Economy",
                    "Digital Economy",
                    "Green Economy",
                    "Experience Economy",
                    "Creative Economy",
                    "Trade Economy",
                    "Knowledge Economy",
                  ].map((industry) => (
                    <li key={industry}>
                      <a
                        href={`#${industry.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2"
                      >
                        {industry}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="bg-blue-600 text-white text-center py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-extrabold">
              Shaping the Future of Work
            </h1>
            <p className="mt-4 text-lg">
              Empowering economies, enhancing careers, and fostering innovation.
            </p>
            <a
              href="#cta"
              className="mt-6 inline-block bg-green-500 text-white py-3 px-8 rounded-full text-lg"
            >
              Join the Consortium
            </a>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="container mx-auto py-20" id="focus-areas">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Our Focus Areas</h2>
            <p className="mt-4 text-lg">
              Key workforce trends and initiatives shaping the future.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "WorkForce Participants",
              "Workforce Enablers",
              "Service Providers",
            ].map((pillar) => (
              <div
                key={pillar}
                className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200"
              >
                <h3 className="text-xl font-semibold">{pillar}</h3>
                <p className="mt-2 text-gray-600">
                  Short description about this area.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Insights */}
        <section className="bg-gray-50 py-20" id="featured-insights">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Featured Insights</h2>
            <p className="mt-4 text-lg">
              Explore the latest reports and research.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Report 1", "Blog 2", "Research 3"].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="mt-2 text-gray-600">
                  Short description of the insight.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-green-500 text-white text-center py-16" id="cta">
          <h2 className="text-3xl font-semibold">
            Join Us in Shaping the Future of Work
          </h2>
          <p className="mt-4 text-lg">
            Be part of a global community driving workforce innovation.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg"
          >
            Subscribe Now
          </a>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6">
          <div className="container mx-auto">
            {/* Initiative Section */}
            <div className="bg-white p-4 rounded-lg text-gray-900 flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="text-center">
                <p className="font-semibold">An initiative of</p>
                <img
                  src="https://res.cloudinary.com/dwa3soopc/image/upload/v1741594460/8_zziqf2.png"
                  alt="Qraft Logo"
                  className="h-20 mx-auto"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold">In partnership with</p>
                <img
                  src="https://res.cloudinary.com/dwa3soopc/image/upload/v1741593599/ADHRAC-LOGO-PNG_ha4i34.png"
                  alt="ADHRAC Logo"
                  className="h-12 mx-auto"
                />
              </div>
            </div>

            {/* Copyright Section */}
            <hr className="my-4 border-gray-700" />
            <p>&copy; 2025 Future of Work Consortium. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
