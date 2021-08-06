import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import BotaoLink from './BotaoLink';
import { ALTERNAR_FAVORITO } from '../gql/mutation';
import { OBTER_MEUS_FAVORITOS } from '../gql/query';

const FavoritaNota = props => {
  const [contador, setContador] = useState(props.contadorFavorito);
  const [favoritada, setFavoritada] = useState(
    props.eu.favoritos.filter(nota => nota.id === props.notaId).length > 0
  );

  const [alternarFavorito] = useMutation(ALTERNAR_FAVORITO, {
    variables: {
      id: props.notaId
    },
    refetchQueries: [{ query: OBTER_MEUS_FAVORITOS }]
  });

  return (
    <React.Fragment>
      {favoritada ? (
        <BotaoLink
          onClick={() => {
            alternarFavorito();
            setFavoritada(false);
            setContador(contador - 1);
          }}
        >
          Remover Favorito
        </BotaoLink>
      ) : (
        <BotaoLink
          onClick={() => {
            alternarFavorito();
            setFavoritada(true);
            setContador(contador + 1);
          }}
        >
          Adicionar Favorito
        </BotaoLink>
      )}
      : {contador}
    </React.Fragment>
  );
};

export default FavoritaNota;