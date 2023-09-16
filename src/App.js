import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const clearInput = () => {
    inputRef.current.value = ''; // Clear the input field
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something" />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={clearInput}>Clear Input</button>
    </div>
  );
}

export default TextInputWithFocusButton;
