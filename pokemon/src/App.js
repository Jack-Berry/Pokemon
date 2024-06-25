import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./Components/Search";
import Pokemon from "./Components/Pokemon";

const App = () => {
  const [data, getData] = useState();

  const onInput = (text) => {
    let result = text.toLocaleLowerCase();
    getApiData(result);
  };

  const getApiData = async (text) => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${text}/`
      );
      getData(data);
      console.log(data);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {}, []);
  if (!data) {
    return (
      <>
        <h1>Pokemon</h1>
        <Search onInput={onInput} />
        <div className="container">
          <h1>Enter a Pokemon above!</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Pokemon</h1>
      <Search onInput={onInput} />
      <Pokemon data={data} />
    </>
  );
};

export default App;
