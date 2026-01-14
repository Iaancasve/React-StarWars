import { useState } from "react";
import { ImageList } from "./gifs/components/ImageList.tsx";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockImage } from "./mock-data/images.mock.ts";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const StarWarsApp = () => {

  const [previousTerms, setPreviousTerms] = useState([] as string []);

  const handleTermClicked = (term: string = '') => {
    console.log(`Term clicked: ${term}`);
  }

  const handleSearch = (query: string) => {
    //Comprobar si query es vacío
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    //Comprobar si el término ya existe en previousTerms  
    if (previousTerms.includes(query)) return;
    setPreviousTerms([query, ...previousTerms].splice(0, 7));
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre tu personaje favorito"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras"
      onQuery={handleSearch}/>

      {/* Búsquedas previas*/}
      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

      {/* Imagenes */}
      <ImageList images={mockImage}/>
    </>
  );
};
