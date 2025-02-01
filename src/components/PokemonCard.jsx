import React, { useEffect, useState } from "react";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    console.log("Fetching Pokemon...");
    const url = "https://pokeapi.co/api/v2/pokemon/1"; // Bulbasaur

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-4 border rounded shadow-lg bg-white">
      <h2 className="text-xl font-bold">My Pokemon Card</h2>
      <p>My Pokemon Card represents a Pokémon.</p>

      {pokemon ? (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{pokemon.name.toUpperCase()}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-32 h-32 mx-auto" />
          <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonCard;
