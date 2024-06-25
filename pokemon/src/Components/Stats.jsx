import React from "react";
import Text from "./Text";
import Types from "./Types";

export const Stats = (data) => {
  const { name, id, weight, types, height } = data.data;
  console.log(data, "Data");
  return (
    <div className="stats">
      <Text key="num" field="Pokedex:" text={id} />
      <Types key="types" data={types} />
      <Text key="height" field="Height:" text={height} />
      <Text key="weight" field="Weight:" text={weight} />
    </div>
  );
};

export default Stats;
