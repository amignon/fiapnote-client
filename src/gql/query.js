import { gql } from '@apollo/client';

const OBTER_NOTAS = gql`
query {
  notas {
    id
    conteudo
    createdAt
    contadorFavorito
    autor { 
      id
      nomeUsuario
    }
  }
}
`;

const OBTER_NOTA = gql`
  query note($id: ID!) {
    nota(id: $id) {
      id
      createdAt
      conteudo
      contadorFavorito
      autor { 
        id
        nomeUsuario
      }
    }
  }
`;

const OBTER_MINHAS_NOTAS = gql`
  query eu {
    eu {
      id
      nomeUsuario
      notas {
        id
        createdAt
        conteudo
        contadorFavorito
        autor {
          nomeUsuario
          id
        }
      }
    }
  }
`;

const OBTER_MEUS_FAVORITOS = gql`
  query eu {
    eu {
      id
      nomeUsuario
      favoritos {
        id
        createdAt
        conteudo
        contadorFavorito
        autor {
          nomeUsuario
          id
        }
      }
    }
  }
`;

const OBTER_EU = gql`
  query eu {
    eu {
      id
      favoritos {
        id
      }
    }
  }
`;

const ESTA_LOGADO = gql`
  {
    estaLogado @client
  }
`;

export {
  OBTER_NOTAS,
  OBTER_NOTA,
  OBTER_MINHAS_NOTAS,
  OBTER_MEUS_FAVORITOS,
  OBTER_EU,
  ESTA_LOGADO
};
