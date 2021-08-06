import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import ListaNotas from '../componentes/ListaNotas';
import { OBTER_MINHAS_NOTAS } from '../gql/query';

const MinhasNotas = () => {
  useEffect(() => {
    document.title = 'Minhas Notas — FiapNote';
  });

  const { loading, error, data } = useQuery(OBTER_MINHAS_NOTAS);

  if (loading) return 'Carregando...';
  if (error) return `Erro!${error}`;
  if (data.eu.notas.length !== 0) {
    return <ListaNotas notas={data.eu.notas} />;
  } else {
    return <p>Nenhuma nota.</p>;
  }
};

export default MinhasNotas;