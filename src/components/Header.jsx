import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <div className="header bg-gray-600 text-white p-4 flex justify-around font-medium">
        <NavLink to={"/"}> Home </NavLink>
        <NavLink to={"/pages/SearchPage"}> Search </NavLink>
        <NavLink to={"/pages/PokemonDetailsPage"}> Pokemon Details </NavLink>
      </div>
    </>
  );
};

export default Header;
