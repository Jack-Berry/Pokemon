import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchData } from "../features/simpson/simpsonSlice";

function Search() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const localInput = (e) => {
    dispatch(searchData(e.target.value));
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
      <select className="select" id="select" onChange={localInput}>
        <option disabled selected value>
          Sort
        </option>
        <option value={"A-Z"}>A-Z</option>
        <option value={"Z-A"}>Z-A</option>
      </select>
    </>
  );
}

export default Search;
