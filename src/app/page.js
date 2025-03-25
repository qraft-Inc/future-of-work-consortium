"use client";

import Head from "next/head";

export default function Home() {
  const focusAreas = [
    { title: "Workforce Participants", description: "Short description about this area." },
    { title: "Workforce Enablers", description: "Short description about this area." },
    { title: "Service Providers", description: "Short description about this area." }
  ];

  const industries = [
    { title: "Care Economy", description: "Focus on health and social care jobs." },
    { title: "Gig Economy", description: "Independent contractors and freelance work." },
    { title: "Digital Economy", description: "Business and jobs based on digital technologies." },
    { title: "Green Economy", description: "Jobs in renewable energy and sustainable practices." },
    { title: "Experience Economy", description: "Industries centered on customer experiences." },
    { title: "Creative Economy", description: "Art, design, and creative professions." },
    { title: "Trade Economy", description: "Focus on the exchange of goods and services." },
    { title: "Knowledge Economy", description: "Industries based on intellectual capital." },
  ];

  return (
    <>
      {/* Metadata for Title and Favicon */}
      <Head>
        <title>Future of Work Consortium</title>
        <meta name="description" content="Shaping the Future of Work" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dwa3soopc/image/upload/v1741593349/WhatsApp_Image_2025-02-03_at_18.40.33_1_hq6arb.jpg"
          sizes="64x64"
        />
      </Head>

      <div className="bg-white text-gray-900">
        {/* Navigation Bar */}
        <header className="sticky top-0 bg-white shadow-md z-10">
          <nav className="container mx-auto flex justify-between items-center py-4">
            <div className="flex  justify -center  items-center space-x-40">
              <img
                src="https://res.cloudinary.com/dwa3soopc/image/upload/v1741593349/WhatsApp_Image_2025-02-03_at_18.40.33_1_hq6arb.jpg"
                alt="Logo"
                className="w-50 h-50 rounded-full"
              />
              <div className="flex justify-center items-center"></div>
              <div className="font-bold text-xl">Managing The Future of Work </div>
            </div>
            <ul className="flex space-x-6">
              <li className="relative group">
                <button className="text-gray-900">Industries</button>
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-lg z-10 hidden group-hover:block">
                  {industries.map((industry) => (
                    <li key={industry.title}>
                      <a
                        href={`#${industry.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2"
                      >
                        {industry.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
<section
  className="bg-blue-600 text-white text-center py-16 bg-cover bg-center relative"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/dwa3soopc/image/upload/v1742914188/consortium_image_ry9ixr.png')",
  }}
>
  <div className="container mx-auto bg-black bg-opacity-40 p-6 rounded-lg max-w-4xl mx-auto">
    <h1 className="text-3xl md:text-4xl font-extrabold">Modern Workforce Development Program</h1>
    <p className="mt-3 text-lg">
      Empowering economies, enhancing careers, and fostering innovation.
    </p>
    <a
      href="#cta"
      className="mt-5 inline-block bg-green-500 text-white py-3 px-8 rounded-full text-lg"
    >
      Join the Consortium
    </a>
  </div>
</section>


        {/* Focus Areas Section */}
        <section className="container mx-auto py-20" id="focus-areas">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Our Focus Areas</h2>
            <p className="mt-4 text-lg">
              Key workforce trends and initiatives shaping the future.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {focusAreas.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200"
              >
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="bg-gray-50 py-20" id="industries">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">The 8 Economies Shaping the Future of Work</h2>
            <p className="mt-4 text-lg">
              Explore the various economies transforming the workforce landscape.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200"
              >
                <h3 className="text-xl font-semibold">{industry.title}</h3>
                <p className="mt-2 text-gray-600">{industry.description}</p>
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

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white text-center py-6">
          <div className="container mx-auto">
            {/* Initiative and Partner Section */}
            <div className="bg-white p-4 rounded-lg text-gray-900 flex flex-col md:flex-row justify-between items-right gap-20">
              <div className="text-center">
                <p className="font-semibold">An initiative of</p>
                <img
                  src="https://res.cloudinary.com/dwa3soopc/image/upload/v1741594460/8_zziqf2.png"
                  alt="Qraft Logo"
                  className="h-22 mx-auto"
                />
                </div>
              <div className="text-center">
                <p className="font-semibold">In partnership with</p>
                <img
                  src="https://res.cloudinary.com/dwa3soopc/image/upload/v1742913785/WhatsApp_Image_2024-10-24_at_11.39.24_sbxjyt.jpg"
                  alt="Teach Nations Logo"
                  className="h-22 mx-auto"
                />
              </div>
              <div className="text-center">
              
                <img
                  src="https://res.cloudinary.com/dwa3soopc/image/upload/v1741593599/ADHRAC-LOGO-PNG_ha4i34.png"
                  alt="ADHRAC Logo"
                  className="h-19 mx-auto"
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
