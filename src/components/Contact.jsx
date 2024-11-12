// src/components/Contact.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 mt-20"> {/* Adjusted top margin */}
      <h1 className="text-3xl font-bold mb-4 text-darkgray">Contact Me</h1>
      {/* Social Links */}
      <div className="flex space-x-6 mb-6">
        <a
          href="https://www.linkedin.com/in/devanshalok"
          target="_blank"
          rel="noopener noreferrer"
          className="text-darkgray hover:text-primary transition duration-300 text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/devanshalok"
          target="_blank"
          rel="noopener noreferrer"
          className="text-darkgray hover:text-primary transition duration-300 text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:devansh.alok@example.com"
          className="text-darkgray hover:text-primary transition duration-300 text-3xl"
        >
          <FaEnvelope />
        </a>
      </div>
      {/* Contact Form */}
      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Name Input */}
          <div className="w-full px-3 mb-4">
            <label className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-lightgray text-darkgray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              type="text"
              placeholder="Your Name"
            />
          </div>
          {/* Email Input */}
          <div className="w-full px-3 mb-4">
            <label className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-lightgray text-darkgray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              type="email"
              placeholder="Your Email"
            />
          </div>
          {/* Message Input */}
          <div className="w-full px-3 mb-4">
            <label className="block uppercase tracking-wide text-darkgray text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-lightgray text-darkgray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary h-48 resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="w-full px-3">
            <button
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 w-full"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert('Message sent!');
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
