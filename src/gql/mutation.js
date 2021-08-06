import { gql } from '@apollo/client';

const NOVA_NOTA = gql`
  mutation novaNota($conteudo: String!) {
    novaNota(conteudo: $conteudo) {
      id
      conteudo
      createdAt
      contadorFavorito
      autor {
        nomeUsuario
        id
      }
    }
  }
`;

const EDITAR_NOTA = gql`
  mutation atualizaNota($id: ID!, $conteudo: String!) {
    atualizaNota(id: $id, conteudo: $conteudo) {
      id
      conteudo
      createdAt
      contadorFavorito
      autor {
        nomeUsuario
        id
      }
    }
  }
`;

const EXCLUI_NOTA = gql`
  mutation excluiNota($id: ID!) {
    excluiNota(id: $id)
  }
`;

const ALTERNAR_FAVORITO = gql`
  mutation alternarFavorito($id: ID!) {
    alternarFavorito(id: $id) {
      id
      contadorFavorito
    }
  }
`;

const ENTRAR_USUARIO = gql`
  mutation entrar($email: String, $senha: String!) {
    entrar(email: $email, senha: $senha)
  }
`;

const INSCREVER_USUARIO = gql`
  mutation inscrever($email: String!, $nomeUsuario: String!, $senha: String!) {
    inscrever(email: $email, nomeUsuario: $nomeUsuario, senha: $senha)
  }
`;

export {
  NOVA_NOTA,
  EDITAR_NOTA,
  EXCLUI_NOTA,
  ALTERNAR_FAVORITO,
  ENTRAR_USUARIO,
  INSCREVER_USUARIO
};