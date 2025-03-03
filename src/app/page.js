"use client"; // Ensures this is a client component

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Navigation Bar */}
      <header className="sticky top-0 bg-white shadow-md z-10">
        <nav className="container mx-auto flex justify-between items-center py-4">
          <div className="font-bold text-xl">Future of Work Consortium</div>
          <ul className="flex space-x-6">
            {/* Dropdown for Industries */}
            <li className="relative group">
              <button className="text-gray-900">Industries</button>
              <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-lg z-10 hidden group-hover:block">
                <li><a href="#care-economy" className="block px-4 py-2">Care Economy</a></li>
                <li><a href="#gig-economy" className="block px-4 py-2">Gig Economy</a></li>
                <li><a href="#digital-economy" className="block px-4 py-2">Digital Economy</a></li>
                <li><a href="#green-economy" className="block px-4 py-2">Green Economy</a></li>
                <li><a href="#experience-economy" className="block px-4 py-2">Experience Economy</a></li>
                <li><a href="#creative-economy" className="block px-4 py-2">Creative Economy</a></li>
                <li><a href="#trade-economy" className="block px-4 py-2">Trade Economy</a></li>
                <li><a href="#knowledge-economy" className="block px-4 py-2">Knowledge Economy</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold">Shaping the Future of Work</h1>
          <p className="mt-4 text-lg">Empowering economies, enhancing careers, and fostering innovation.</p>
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
          <p className="mt-4 text-lg">Key workforce trends and initiatives shaping the future.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Focus Area Cards */}
          {['Career Development', 'Innovation & Business Development', 'Leadership Development', 'Well-Being Development'].map((pillar) => (
            <div key={pillar} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{pillar}</h3>
              <p className="mt-4">Short description about this area.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Insights */}
      <section className="bg-gray-50 py-20" id="featured-insights">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Featured Insights</h2>
          <p className="mt-4 text-lg">Explore the latest reports and research.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Insights Cards */}
          {['Report 1', 'Blog 2', 'Research 3'].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-4">Short description of the insight.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-500 text-white text-center py-16" id="cta">
        <h2 className="text-3xl font-semibold">Join Us in Shaping the Future of Work</h2>
        <p className="mt-4 text-lg">Be part of a global community driving workforce innovation.</p>
        <a
          href="#"
          className="mt-6 inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg"
        >
          Subscribe Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 Future of Work Consortium. All rights reserved.</p>
      </footer>
    </div>
  );
}
