import React from "react";

const Types = (data) => {
  return data.data.map((data) => {
    const type = data.type.name;
    return <h2 key={type + data.index}>Type: {type}</h2>;
  });
};

export default Types;
