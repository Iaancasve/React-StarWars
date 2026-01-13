import { mockImage } from "./mock-data/images.mock";

export const StarwarsApp = () => {
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
      <div className="images-container">
        {mockImage.map((image) => (
          <div key={image.id} className="images-card">
            <img src={image.image} alt={image.name} />
            <h3>{image.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};