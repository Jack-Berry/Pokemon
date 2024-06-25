import React from "react";

export function Text(data) {
  const { field, text } = data;
  return (
    <h2>
      {field} {text}
    </h2>
  );
}

export default Text;
