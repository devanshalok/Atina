import React, { useState } from 'react';
import { filesData } from '../data/files';
import { FaSearch } from 'react-icons/fa';


function Services() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFiles = filesData.filter((file) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      file.name.toLowerCase().includes(searchLower) ||
      file.company.toLowerCase().includes(searchLower) ||
      file.skills.some((skill) => skill.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="container mx-auto mt-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-darkgray">Available Files</h1>
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search by file name, company, or skill..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>
      {/* Files List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredFiles.map((file) => (
          <div
            key={file.id}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-darkgray">{file.name}</h2>
            <p className="text-gray-600">Company: {file.company}</p>
            <p className="text-gray-600">Type: {file.type}</p>
            <div className="mt-2">
              {file.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-lightgray text-darkgray px-2 py-1 mr-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
              onClick={() => alert(`Downloading ${file.name}`)}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
