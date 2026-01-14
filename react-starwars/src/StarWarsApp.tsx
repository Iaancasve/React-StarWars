import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockImage } from "./mock-data/images.mock.ts";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const StarWarsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras"/>

      {/* Búsquedas previas*/}
      <PreviousSearches />

      {/* Gifs */}
      <div className="images-container">
        {mockImage.map((mockImage) => (
          <div key={mockImage.id} className="images-card">
            <img src={mockImage.image} alt={mockImage.name} />
            <h3>{mockImage.name}</h3>
            <p>
              {mockImage.width}x{mockImage.height} (1.5mb)
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
