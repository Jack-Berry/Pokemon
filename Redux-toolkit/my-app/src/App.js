import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setApiData,
  selectData,
  setLoaded,
  hasLoaded,
} from "./features/simpson/simpsonSlice";
import Simpsons from "./components/Simpsons";
import Search from "./components/Search";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const loaded = useSelector(hasLoaded);

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((e, index) => {
      e.id = index + 1;
      e.favourite = false;
    });
    dispatch(setApiData(data));
    console.log("RAN");
  };
  useEffect(() => {
    getApiData();
    dispatch(setLoaded());
  }, []); // Only runs once
  useEffect(() => {
    if (!data && loaded) {
      getApiData();
    }
  }, [data]);
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Search />
      <Simpsons />
    </>
  );
}

export default App;
