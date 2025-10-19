import React, { createContext, useState, useContext } from 'react';

// 1. A LISTA MESTRA DE MANGÁS (COM SEUS PEDIDOS)
// Usei o picsum.photos/seed/ para garantir que as imagens carreguem no Snack
const ALL_MANGA_DATA = [
  // Seus 8
  { 
    id: '1', 
    title: 'Jojo\'s Bizarre Adventure', 
    author: 'Hirohiko Araki', 
    coverUrl: 'https://m.media-amazon.com/images/I/71rFKHc7BGL._UF1000,1000_QL80_.jpg',
    synopsis: 'A saga de gerações da família Joestar e sua luta contra forças sobrenaturais.'
  },
  { 
    id: '2', 
    title: 'One Piece', 
    author: 'Eiichiro Oda', 
    coverUrl: 'https://m.media-amazon.com/images/I/716EGgqzyOL._AC_UF1000,1000_QL80_.jpg',
    synopsis: 'Monkey D. Luffy busca o tesouro "One Piece" para se tornar o Rei dos Piratas.'
  },
  { 
    id: '3', 
    title: 'Berserk', 
    author: 'Kentaro Miura', 
    coverUrl: 'https://http2.mlstatic.com/D_NQ_NP_914456-MLB82220024642_022025-O.webp',
    synopsis: 'Guts, o Espadachim Negro, busca vingança em um mundo de fantasia sombria.'
  },
  { 
    id: '4', 
    title: 'Vagabond', 
    author: 'Takehiko Inoue', 
    coverUrl: 'https://m.media-amazon.com/images/I/81AQnk9bGaL._UF1000,1000_QL80_.jpg',
    synopsis: 'Uma releitura da vida do lendário espadachim Miyamoto Musashi.'
  },
  { 
    id: '5', 
    title: 'Solo Leveling', 
    author: 'Chugong', 
    coverUrl: 'https://i0.wp.com/blogbbm.com/wp-content/uploads/2020/10/Solo-Leveling-01-1.jpg?ssl=1',
    synopsis: 'Um caçador de baixo nível ganha um poder extraordinário para subir de nível.'
  },
  { 
    id: '6', 
    title: 'Chainsaw Man', 
    author: 'Tatsuki Fujimoto', 
    coverUrl: 'https://m.media-amazon.com/images/I/81s8xJUzWGL.jpg',
    synopsis: 'Denji se funde com seu demônio de estimação e se torna o "Chainsaw Man".'
  },
  { 
    id: '7', 
    title: 'Dr. Stone', 
    author: 'Riichiro Inagaki', 
    coverUrl: 'https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_8nqvhjgedt0776mernmv827t3p/-S897-FWEBP',
    synopsis: 'O gênio Senku Ishigami desperta em um mundo petrificado e decide recriar a civilização.'
  },
  { 
    id: '8', 
    title: 'Ao Ashi', 
    author: 'Yūgo Kobayashi', 
    coverUrl: 'https://m.media-amazon.com/images/I/81w6dtOBaIL._AC_UF1000,1000_QL80_.jpg',
    synopsis: 'Ashito Aoi, um jovem jogador de futebol, almeja se tornar um profissional.'
  },
  // Extras para a loja
  { 
    id: '9', 
    title: 'Jujutsu Kaisen', 
    author: 'Gege Akutami', 
    coverUrl: 'https://jumpg-assets.tokyo-cdn.com/secure/title/100150/title_thumbnail_portrait_list/312835.jpg?hash=0vpYdZVRJeugCRmVhtn8YQ&expires=2145884400',
    synopsis: 'Yuji Itadori se envolve com feiticeiros para combater maldições.'
  },
  { 
    id: '10', 
    title: 'Vinland Saga', 
    author: 'Makoto Yukimura', 
    coverUrl: 'https://m.media-amazon.com/images/I/91+Qs9DaFZL.jpg',
    synopsis: 'A jornada de Thorfinn em busca de vingança e, eventualmente, um propósito.'
  },
];

// 2. CRIAR O CONTEXTO
const MangaContext = createContext();

// 3. CRIAR O "PROVEDOR" (O componente que gerencia tudo)
export function MangaProvider({ children }) {
  // A lista de todos os mangás
  const allManga = ALL_MANGA_DATA;

  // O estado que guarda os IDs dos mangás na estante
  // (Começa com Jojo e One Piece na estante, por exemplo)
  const [libraryMangaIds, setLibraryMangaIds] = useState(['1', '2']);

  // Função para adicionar à estante
  const addToLibrary = (id) => {
    if (!libraryMangaIds.includes(id)) {
      setLibraryMangaIds([...libraryMangaIds, id]);
    }
  };

  // Função para remover da estante
  const removeFromLibrary = (id) => {
    setLibraryMangaIds(libraryMangaIds.filter((mangaId) => mangaId !== id));
  };

  return (
    <MangaContext.Provider 
      value={{ 
        allManga, 
        libraryMangaIds, 
        addToLibrary, 
        removeFromLibrary 
      }}
    >
      {children}
    </MangaContext.Provider>
  );
}

// 4. CRIAR O "GANCHO" (Hook) (Facilita o uso nas telas)
export function useManga() {
  const context = useContext(MangaContext);
  if (!context) {
    throw new Error('useManga deve ser usado dentro de um MangaProvider');
  }
  return context;
}