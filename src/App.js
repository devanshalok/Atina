import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UploadArea from './components/UploadArea';
import DynamicTextarea from './components/DynamicTextarea';
import SubmitButton from './components/SubmitButton';
import PDFViewer from './components/PDFViewer';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import TextSection from './components/TextSection';

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [showPDFContent, setShowPDFContent] = useState(false);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    setShowPDFContent(false);
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
    setShowPDFContent(false);
  };

  const handleTextChange = (text) => {
    setTextInput(text);
  };

  const handleSubmit = () => {
    setShowPDFContent(true);
  };

  const isActive = uploadedFile && textInput.trim().length > 100;

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto mt-12 px-4 py-16">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
                  {/* Left Section - Text Section */}
                  <TextSection />

                  {/* Right Section - Upload Area and Dynamic Textarea */}
                  <div className="flex flex-col items-center lg:w-1/2 space-y-6">
                    <UploadArea
                      onFileUpload={handleFileUpload}
                      onFileRemove={handleFileRemove}
                      uploadedFile={uploadedFile}
                    />
                    <DynamicTextarea onTextChange={handleTextChange} />
                    <SubmitButton isActive={isActive} onClick={handleSubmit} />
                    {showPDFContent && uploadedFile && uploadedFile.type === 'application/pdf' && (
                      <PDFViewer file={uploadedFile} />
                    )}
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
