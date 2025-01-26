import React from "react";
import { Routes, Route, Link } from "react-router";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import SearchPage from "./pages/SearchPage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <Link to={"/"}> Home </Link>
      <Link to={"/pages/SearchPage"}> Search Page </Link>
      <Link to={"/pages/PokemonDetailsPage"}> Pokemon Details Page </Link>
      <Routes>
        <Route path={"/"} element={""}></Route>
        <Route
          path="/pages/PokemonDetailsPage"
          element={<PokemonDetailsPage />}
        ></Route>
        <Route path="/pages/SearchPage" element={<SearchPage />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
