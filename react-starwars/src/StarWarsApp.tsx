import { useState } from "react";
import { ImageList } from "./gifs/components/ImageList.tsx";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockImage } from "./mock-data/images.mock.ts";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const StarWarsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['Darth Vader']);

  const handleTermClicked = (term: string) => {
    console.log(`Term clicked: ${term}`);
  }
  
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre tu personaje favorito"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras"/>

      {/* Búsquedas previas*/}
      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

      {/* Imagenes */}
      <ImageList images={mockImage}/>
    </>
  );
};
