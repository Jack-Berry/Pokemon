import React, { useState } from "react";
import Character from "./Character";
import Content from "./Content";

function Simpson({ data, id }) {
  const { character, characterDirection, image, quote, favourite } = data;
  // const onClick = () => {
  //   getFavourite((_favourite = !_favourite));
  //   favourited(id);
  // };

  return (
    <div className={`mainCard ${favourite ? "fav" : ""}`}>
      <Character name={character} />
      <Content image={image} direction={characterDirection} quote={quote} />
    </div>
  );
  // return (
  //   <div className={`mainCard ${_favourite ? "fav" : ""}`} onClick={onClick}>
  //     <Character name={character} />
  //     <Content image={image} direction={characterDirection} quote={quote} />
  //   </div>
  // );
}

export default Simpson;
