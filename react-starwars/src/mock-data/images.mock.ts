export interface Image {
  id: string;
  name: string;
  image: string;
  width: number;
  height: number;
}

export const mockImage: Image[] = [
    {
        id: '1',
        name: 'Luke Skywalker',
        image: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        width: 300,
        height: 300,
    },

    {
        id: '2',
        name: 'C-3PO',
        image: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        width: 300,
        height: 300,
    },

    {
        id: '3',
        name: 'R2-D2',
        image: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        width: 300,
        height: 300,
    },

    {
        id: '4',
        name: 'Darth Vader',
        image: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        width: 300,
        height: 300,
    },

    {
        id: '5',
        name: 'Leia Organa',
        image: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        width: 300,
        height: 300,
    }
]