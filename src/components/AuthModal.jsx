import React, { useState } from 'react';

function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('signin');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab) => {
    if (tab !== activeTab && !isAnimating) {
      setIsAnimating(true);
      setActiveTab(tab);
      // Reset animating state after transition completes
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <button
                className={`px-4 py-2 font-bold ${activeTab === 'signin' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                onClick={() => handleTabChange('signin')}
              >
                Sign In
              </button>
              <button
                className={`px-4 py-2 font-bold ${activeTab === 'signup' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
                onClick={() => handleTabChange('signup')}
              >
                Sign Up
              </button>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-primary ml-auto text-3xl font-bold"
                style={{ lineHeight: '1', padding: '0.5rem' }}
              >
                &times;
              </button>
            </div>

            <div className="relative h-[400px]">
              <div
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  activeTab === 'signin'
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-full opacity-0'
                }`}
              >
                <SignInForm />
              </div>
              <div
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  activeTab === 'signup'
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                }`}
              >
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SignInForm() {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your password"
          required
        />
      </div>
      <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
        Sign In
      </button>
    </form>
  );
}

function SignUpForm() {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Confirm Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Confirm your password"
          required
        />
      </div>
      <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
        Sign Up
      </button>
    </form>
  );
}

export default AuthModal;