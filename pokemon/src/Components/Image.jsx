import React from "react";

export const Image = (data) => {
  const { src, name } = data;
  return <img className="image" src={src} alt={name} />;
};

export default Image;
