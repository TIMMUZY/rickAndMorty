import React, { useEffect, useState } from "react";
import "./style.css";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [image, setImage] = useState(1);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=" + image)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data.results);
      })
      .catch((error) =>
        console.error("Произошла ошибка при выполнении запроса:", error)
      );
  }, [image]);

  return (
    <div>
      <h1>Список покемонов</h1>
      <div className="box">
        {pokemonData.map((pokemon) => (
          <div className="container" key={pokemon.name}>
            <img className="page" src={pokemon.image} alt="" />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
      <div className="foot">
        <button onClick={() => setImage((prew) => prew - 1)}>Back</button>
        <button onClick={() => setImage((bi) => bi + 1)}>Next</button>
      </div>
    </div>
  );
}

export default PokemonList;
