import Head from "next/head";

export default function Home() {
  const industries = [
    "Care Economy", "Gig Economy", "Digital Economy", "Green Economy",
    "Experience Economy", "Creative Economy", "Trade Economy", "Knowledge Economy"
  ];

  return (
    <>
      <Head>
        <title>Future of Work Consortium</title>
        <meta name="description" content="Shaping the Future of Work" />
        <link rel="icon" href="https://res.cloudinary.com/dwa3soopc/image/upload/v1741593349/WhatsApp_Image_2025-02-03_at_18.40.33_1_hq6arb.jpg" sizes="64x64" />
      </Head>

      <div className="bg-white text-gray-900">
        {/* Navigation */}
        <header className="sticky top-0 bg-white shadow-md z-10">
          <nav className="container mx-auto flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img src="https://res.cloudinary.com/dwa3soopc/image/upload/v1741593349/WhatsApp_Image_2025-02-03_at_18.40.33_1_hq6arb.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
              <div className="text-xl font-bold">Managing The Future of Work</div>
            </div>
            <ul className="flex space-x-6">
              <li className="relative group">
                <button className="text-gray-900">Industries</button>
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-lg z-10 hidden group-hover:block">
                  {industries.map((industry) => (
                    <li key={industry}>
                      <a href={`#${industry.toLowerCase().replace(/\s+/g, "-")}`} className="block px-4 py-2">{industry}</a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="bg-blue-600 text-white text-center py-16 bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dwa3soopc/image/upload/v1742914188/consortium_image_ry9ixr.png')" }}>
          <div className="container mx-auto bg-black bg-opacity-40 p-6 rounded-lg max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-extrabold">Modern Workforce Development Program</h1>
            <p className="mt-3 text-lg">Empowering economies, enhancing careers, and fostering innovation.</p>
            <a href="#cta" className="mt-5 inline-block bg-green-500 text-white py-3 px-8 rounded-full text-lg">Join the Consortium</a>
          </div>
        </section>

        {/* Industries Section */}
        <section className="bg-gray-50 py-20" id="industries">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">The 8 Economies Shaping the Future of Work</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div key={industry} className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
                <h3 className="text-xl font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-500 text-white text-center py-16" id="cta">
          <h2 className="text-3xl font-semibold">Join Us in Shaping the Future of Work</h2>
          <a href="#" className="mt-6 inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg">Subscribe Now</a>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6">
          <div className="container mx-auto">
            <div className="bg-white p-4 rounded-lg text-gray-900 flex flex-wrap justify-center items-center gap-10">
              <div className="flex items-center space-x-4">
                <p className="font-semibold">An initiative of</p>
                <img src="https://res.cloudinary.com/dwa3soopc/image/upload/v1741594460/8_zziqf2.png" alt="Qraft Logo" className="h-14" />
              </div>
              <div className="flex items-center space-x-4">
                <p className="font-semibold">In partnership with</p>
                <img src="https://res.cloudinary.com/dwa3soopc/image/upload/v1742913785/WhatsApp_Image_2024-10-24_at_11.39.24_sbxjyt.jpg" alt="Teach Nations Logo" className="h-14" />
                <img src="https://res.cloudinary.com/dwa3soopc/image/upload/v1741593599/ADHRAC-LOGO-PNG_ha4i34.png" alt="ADHRAC Logo" className="h-14" />
              </div>
            </div>
            <hr className="my-4 border-gray-700" />
            <p>&copy; 2025 Future of Work Consortium. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
