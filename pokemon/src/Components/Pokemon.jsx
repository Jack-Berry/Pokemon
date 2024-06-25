import React from "react";
import Image from "./Image";
import Stats from "./Stats";

function Pokemon(data) {
  const { name, id } = data.data;
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  if (!name) {
    return (
      <div className="container">
        <h1>Enter another Pokemon above!</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{name}</h1>
      <Image key="image" src={src} name={name} />
      <Stats key="stats" data={data.data} />
    </div>
  );
}

export default Pokemon;
