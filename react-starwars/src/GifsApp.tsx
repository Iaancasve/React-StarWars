import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  return (
    <>
      {/*Header */}
      <div className="content-center">
        <h1>Buscador de STARWARS</h1>
        <p>Descubre el personaje perfecto</p>
      </div>

      {/* Search */}
      <div className="search-container">
        <input type="text" placeholder="buscar personaje" />
        <button>Buscar</button>
      </div>

      {/* Búsquedas previas*/}
      <div className="previous-searches">
        <h2>Búsquedas Previas</h2>
        <ul className="previous-searches-list">
          <li>Humano</li>
          <li>Villano</li>
          <li>Nave</li>
        </ul>
      </div>

      {/* Gifs */}
      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.image} alt={gif.name} />
            <h3>{gif.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};