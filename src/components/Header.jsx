import React, { useState } from "react";
import { NavLink } from "react-router"; // Correct react-router import
import cross from "../assets/cross.svg";
import burger from "../assets/burger.svg";

const Header = () => {
  const [isOn, setIsOn] = useState(false);
 

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? "text-blue-500 font-bold" : "text-gray-400";
  };
  

  return (
    <>
      <div className="header bg-white shadow-sm text-orange-400 p-4 flex justify-between  md:justify-around items-center font-medium">
        <NavLink to={"/"}>
          <div className={`logo px-4 md:px-0 font-bold tracking-wide ${getNavLinkClass}`}>PokeMon</div>
        </NavLink>
        <nav className="hidden md:flex">
          <NavLink className={`mx-4 ${getNavLinkClass}`} to={"/"}>Home</NavLink>
          <NavLink className={`mx-4 ${getNavLinkClass}`}  to={"/pages/PokemonDetailsPage"}>Pokemons</NavLink>
          <NavLink className={`mx-4 ${getNavLinkClass}`}  to={"/pages/SearchPage"}>Search</NavLink>
        </nav>
        <div className="md:hidden" onClick={toggleSwitch}>
          {isOn ? (
            <img className="h-8 w-8 cursor-pointer" src={cross} alt="cross" />
          ) : (
            <img className="h-8 w-8  cursor-pointer" src={burger} alt="burger" />
          )}
        </div>
      </div>
      <div
        className={`md:hidden ${isOn ? "block" : "hidden"} bg-white shadow-sm text-orange-400 p-4`}
      >
        <nav>
          <NavLink className="block py-2 px-4" to={"/"}>Home</NavLink>
          <NavLink className="block py-2 px-4" to={"/pages/PokemonDetailsPage"}>Pokemons</NavLink>
          <NavLink className="block py-2 px-4" to={"/pages/SearchPage"}>Search</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
