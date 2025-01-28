import React from "react";
import logo from "./assets/react.svg";
const Home = () => {
  return (
    <>
      <div className="home flex justify-around  items-center">
        <div className="left p-4 w-1/2 container">
          <h1 className="text-3xl p-2">Explore the Pokemon</h1>
          <p className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            illum fuga sunt suscipit soluta perferendis nostrum autem rerum
            adipisci vel?
          </p>
          <button className="m-2 rounded font-medium cursor-pointer bg-blue-300 text-blue-900 p-4">Explore PokemOns</button>
        </div>
        <div className="container right p-4 w-1/2">
          <img className="w-full h-full " src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
