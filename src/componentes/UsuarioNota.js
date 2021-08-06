import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import ExcluiNota from './ExcluiNota';
import FavoritaNota from './FavoritaNota';
import { OBTER_EU } from '../gql/query';

const UsuarioNota = props => {
  const { loading, error, data } = useQuery(OBTER_EU);
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro!</p>;

  return (
    <React.Fragment>
      <FavoritaNota
        eu={data.eu}
        notaId={props.nota.id}
        contadorFavorito={props.nota.contadorFavorito}
      />
      <br />
      {data.eu.id === props.nota.autor.id && (
        <React.Fragment>
          <Link to={`/edita/${props.nota.id}`}>Editar Nota</Link> <br />
          <ExcluiNota notaId={props.nota.id} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default UsuarioNota;