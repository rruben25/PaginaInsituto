import React, { useState, useEffect } from 'react';
import heroes from './heroes.json';

function MarvelHeroSelector() {
  const [marvelHeroes, setMarvelHeroes] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);

  useEffect(() => {
    const filteredHeroes = heroes.filter(hero => hero.publisher === "Marvel Comics");
    setMarvelHeroes(filteredHeroes);
  }, []);

  const handleSelectHero = (event) => {
    const heroName = event.target.value;
    const hero = marvelHeroes.find(h => h.superhero === heroName);
    setSelectedHero(hero || null);
  };

  return (
    <div>
      <h1>Seleccione un Personaje  </h1>
      
      <select onChange={handleSelectHero} defaultValue="">
        <option value="">Selecciona Superheroe</option>
        {marvelHeroes.map(hero => (
          <option key={hero.superhero} value={hero.superhero}>
            {hero.superhero}
          </option>
        ))}
      </select>

      {selectedHero && (
        <div>
          <h2>Detalles del Superhéroe</h2>
          <p><strong>Superhéroe:</strong> {selectedHero.superhero}</p>
          <p><strong>Alter Ego:</strong> {selectedHero.alter_ego}</p>
          <p><strong>Primera Aparición:</strong> {selectedHero.first_appearance}</p>
          <p><strong>Personajes:</strong> {selectedHero.characters}</p>
        </div>
      )}
    </div>
  );
}

export default MarvelHeroSelector;
