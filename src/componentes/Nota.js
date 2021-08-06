import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import UsuarioNota from './UsuarioNota';
import { ESTA_LOGADO } from '../gql/query';

const EstiloNota = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const DadosNota = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

const AcoesUsuario = styled.div`
  margin-left: auto;
`;

const Nota = ({ nota }) => {
  const { loading, error, data } = useQuery(ESTA_LOGADO);
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro!</p>;
  return (
    <EstiloNota>
      <DadosNota>
        {nota.autor.nomeUsuario} <br />
        {format(new Date(nota.createdAt), 'dd/MM/yyyy HH:mm:ss')}
        {data.estaLogado ? (
          <AcoesUsuario>
            <UsuarioNota nota={nota} />
          </AcoesUsuario>
        ) : (
          <AcoesUsuario>
            <em>Favoritos:</em> {nota.contadorFavorito}
          </AcoesUsuario>
        )}
      </DadosNota>
      <ReactMarkdown>{nota.conteudo}</ReactMarkdown>
    </EstiloNota>
  );
};

export default Nota;