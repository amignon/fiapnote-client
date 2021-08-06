import React from 'react';
import { useQuery } from '@apollo/client';

import Nota from '../componentes/Nota';
import { OBTER_NOTA } from '../gql/query';

const PaginaNota = props => {
  const id = props.match.params.id;

  const { loading, error, data } = useQuery(OBTER_NOTA, { variables: { id } });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro! Nota não encontrada.</p>;

  return <Nota nota={data.nota} />;
};

export default PaginaNota;