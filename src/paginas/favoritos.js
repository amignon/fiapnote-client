import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import ListaNotas from '../componentes/ListaNotas';
import { OBTER_MEUS_FAVORITOS } from '../gql/query';

const Favoritos = () => {
  useEffect(() => {
    document.title = 'Favoritos — FiapNote';
  });

  const { loading, error, data } = useQuery(OBTER_MEUS_FAVORITOS);

  if (loading) return 'Carregando...';
  if (error) return `Erro! ${error.message}`;
  if (data.eu.favoritos.length !== 0) {
    return <ListaNotas notas={data.eu.favoritos} />;
  } else {
    return <p>Nenhuma nota favoritada.</p>;
  }
};

export default Favoritos;