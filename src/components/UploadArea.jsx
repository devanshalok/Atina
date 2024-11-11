import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 

function UploadArea({ onFileUpload, onFileRemove, uploadedFile }) {
  const [isDragging, setIsDragging] = useState(false);

  const validateAndSetFile = (selectedFile) => {
    if (
      selectedFile &&
      ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(
        selectedFile.type
      )
    ) {
      onFileUpload(selectedFile);
    } else {
      alert('Please upload a PDF or Word document.');
    }
  };

  const handleFileChange = (e) => {
    validateAndSetFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    validateAndSetFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="flex">
      <div
        className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md transition-all duration-300 ${
          isDragging ? 'bg-primary bg-opacity-20' : 'bg-lightgray'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
        >
          Upload File
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
        <p className="text-darkgray mt-2">
          Drag and drop a PDF or Word document here, or click to select a file.
        </p>
      </div>

      {uploadedFile && (
        <div className="flex items-center ml-4 p-4 bg-white rounded-lg shadow-md relative">
          <div>
            <p className="text-darkgray">
              <strong>File:</strong> {uploadedFile.name}
            </p>
            <p className="text-gray-500 text-sm">{uploadedFile.type}</p>
          </div>
          <button
            onClick={onFileRemove}
            className="text-gray-500 hover:text-primary absolute top-2 right-2"
          >
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
}

export default UploadArea;
