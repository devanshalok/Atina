import React from 'react';

function SubmitButton({ isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={!isActive}
      className={`mt-4 px-6 py-2 rounded-lg font-semibold text-white transition duration-300 ${
        isActive
          ? 'bg-primary hover:bg-opacity-90'
          : 'bg-gray-400 cursor-not-allowed'
      }`}
    >
      Submit
    </button>
  );
}

export default SubmitButton;
