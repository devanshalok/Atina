import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto mt-12 px-4">
      <h1
        className="text-4xl font-bold mb-8 text-darkgray"
        data-aos="fade-down"
      >
        About Our App
      </h1>
      <p className="text-darkgray mb-6" data-aos="fade-up">
        Our app allows users to upload, categorize, and search for PDF and Word documents efficiently.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="p-4 bg-white rounded-lg shadow-md"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-semibold mb-2 text-darkgray">Upload Files</h2>
          <p className="text-gray-600">
            Easily upload your documents and categorize them by company and skills.
          </p>
        </div>
        <div
          className="p-4 bg-white rounded-lg shadow-md"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-semibold mb-2 text-darkgray">Search Functionality</h2>
          <p className="text-gray-600">
            Quickly find files using our powerful search feature.
          </p>
        </div>
        <div
          className="p-4 bg-white rounded-lg shadow-md"
          data-aos="fade-left"
        >
          <h2 className="text-xl font-semibold mb-2 text-darkgray">Download and Share</h2>
          <p className="text-gray-600">
            Download files and share them with others seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
