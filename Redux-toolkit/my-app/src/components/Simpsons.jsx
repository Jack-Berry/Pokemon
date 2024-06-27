import React from "react";
import { useSelector } from "react-redux";
import Simpson from "./Simpson";
import { selectData } from "../features/simpson/simpsonSlice";

function Simpsons() {
  const data = useSelector(selectData);
  return data.map((data) => {
    let idKey = data.id;
    return <Simpson key={idKey} id={idKey} data={data} />;
  });
}

export default Simpsons;
