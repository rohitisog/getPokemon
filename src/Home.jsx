import React from "react";
import cross from "./assets/cross.svg";

const Home = () => {
  return (
    <>
      <div className="home mx-5 p-2 md:flex md:justify-between items-center md:mt-10 md:max-w-screen-lg mx-auto">
        <div className="md:w-1/2">
          <img className="object-cover rounded-2xl border-red-200 border p-2" src={cross} alt="cross" />
        </div>
        <div className="md:w-1/2 md:flex md:flex-col md:justify-between">
          <h1 className="text-3xl md:py-2 md:text-6xl md:font-extrabold font-semibold text-orange-500 text-center md:text-left">
            Welcome to Pokemon Discovery
          </h1>
          <p className="my-3 md:my-4 md:text-amber-500 text-center md:text-left">
            View Amazing Pokemons with our innovative platform! Amazing Pokemons!
          </p>
          <div className="md:flex md:space-x-4 justify-center">
            <button className="py-4 px-4 mr-2 bg-amber-500 rounded text-white font-semibold cursor-pointer hover:bg-amber-400">
              Get Pokemons
            </button>
            <button className="py-4 px-4 bg-white rounded text-amber-500 border-amber-400 border font-semibold cursor-pointer hover:text-white hover:bg-amber-500">
              View Pokemons
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
