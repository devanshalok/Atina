import React, { useState, useRef, useEffect } from 'react';

function DynamicTextarea({ onTextChange }) {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
    onTextChange(e.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={handleChange}
      className="w-3/6 mt-4 p-2 border border-gray-300 rounded resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary transition-all"
      placeholder="Enter your text here..."
    />
  );
}

export default DynamicTextarea;
