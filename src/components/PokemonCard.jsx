import React, { useState } from "react";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = () => {
    setLoading(true); // Show loader
    setPokemon(null); // Reset previous data

    setTimeout(() => {
      const url = "https://pokeapi.co/api/v2/pokemon/1"; // Bulbasaur

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data);
          setLoading(false); // Hide loader
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, 5000); // 5-second delay
  };

  return (
    <div className="p-4 border rounded shadow-lg bg-white text-center">
      <h2 className="text-xl font-bold">My Pokémon Card</h2>
      <p>Click the button to fetch a Pokémon.</p>

      <button 
        onClick={fetchPokemon} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
        Fetch Pokémon
      </button>

      {loading && <p className="mt-4 text-gray-600">Fetching Pokémon... ⏳</p>}

      {pokemon && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{pokemon.name.toUpperCase()}</h3>
          <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            className="w-32 h-32 mx-auto"
          />
          <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
