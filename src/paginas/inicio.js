import React from 'react';
import { useQuery } from '@apollo/client';

import ListaNotas from '../componentes/ListaNotas';
import { OBTER_NOTAS } from '../gql/query';

const Inicio = () => {
  // query hook
  const { data, loading, error } = useQuery(OBTER_NOTAS);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro!</p>;
  return (
    <ListaNotas notas={data.notas} />
  );
};

export default Inicio;