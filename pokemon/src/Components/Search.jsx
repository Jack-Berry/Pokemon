import React, { useRef, useEffect } from "react";
import Joi from "joi";

function Search({ onInput }) {
  const inputRef = useRef(null);
  const localInput = (e) => {
    onInput(e.target.value);
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Only runs once

  return (
    <>
      <input
        type="text"
        className="searchBox"
        placeholder="Search here..."
        ref={inputRef}
        onInput={localInput}
      />
    </>
  );
}

export default Search;
