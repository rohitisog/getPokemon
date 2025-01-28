import React from "react";
import { Routes, Route, Link, NavLink } from "react-router";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import SearchPage from "./pages/SearchPage";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./Layout";
import Home from "./Home";

const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
          <Route
            path="/pages/PokemonDetailsPage"
            element={<PokemonDetailsPage />}
          ></Route>
          <Route path="/pages/SearchPage" element={<SearchPage />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
