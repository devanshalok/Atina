import React, { useState } from 'react';
import { filesData } from '../data/files';
import { FaSearch } from 'react-icons/fa';

function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [files, setFiles] = useState(filesData); // Initialize with existing files
  const [showUploadForm, setShowUploadForm] = useState(false); // Modal visibility
  const [newFile, setNewFile] = useState({
    name: '',
    company: '',
    skills: '',
    fileType: '',
    file: null,
  });

  const filteredFiles = files.filter((file) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      file.name.toLowerCase().includes(searchLower) ||
      file.company.toLowerCase().includes(searchLower) ||
      file.skills.some((skill) => skill.toLowerCase().includes(searchLower))
    );
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewFile((prev) => ({
        ...prev,
        name: file.name,
        fileType: file.type.includes('pdf') ? 'PDF' : 'Word',
        file: file,
      }));
    }
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    const newUploadedFile = {
      id: files.length + 1,
      name: newFile.name,
      company: newFile.company,
      skills: newFile.skills.split(',').map((tag) => tag.trim()), // Convert tags to array
      type: newFile.fileType,
    };
    setFiles((prevFiles) => [...prevFiles, newUploadedFile]);
    setShowUploadForm(false);
    setNewFile({ name: '', company: '', skills: '', fileType: '', file: null });
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4 text-darkgray">Available Files</h1>
      
      {/* Search and Upload Section */}
      <div className="flex items-center mb-6 space-x-4"> {/* Flex container with spacing */}
        {/* Search Bar */}
        <div className="relative flex-grow"> {/* flex-grow makes search bar take up available space */}
          <input
            type="text"
            placeholder="Search by file name, company, or skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        {/* Upload Button */}
        <button
          onClick={() => setShowUploadForm(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
        >
          Upload New File
        </button>
      </div>

      {/* Upload Form Modal */}
      {showUploadForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-darkgray">Upload New File</h2>
            <form onSubmit={handleUploadSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-darkgray mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={newFile.company}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-darkgray mb-2">
                  Technology Tags (comma-separated)
                </label>
                <input
                  type="text"
                  name="skills"
                  value={newFile.skills}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-darkgray mb-2">
                  Upload File
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 w-full"
              >
                Upload
              </button>
              <button
                type="button"
                onClick={() => setShowUploadForm(false)}
                className="mt-4 text-darkgray hover:text-primary transition duration-300 w-full"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

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
