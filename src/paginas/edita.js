import React from 'react';
import { useMutation, useQuery } from '@apollo/client';

import FormularioNota from '../componentes/FormularioNota';
import { OBTER_NOTA, OBTER_EU } from '../gql/query';
import { EDITAR_NOTA } from '../gql/mutation';

const EditaNota = props => {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(OBTER_NOTA, { variables: { id } });
  const { data: dados } = useQuery(OBTER_EU);
  // define our mutation
  const [editaNota] = useMutation(EDITAR_NOTA, {
    variables: {
      id
    },
    onCompleted: () => {
      props.history.push(`/nota/${id}`);
    }
  });

  if (loading) return 'Carregando...';
  if (error) return <p>Erro!</p>;
  if (dados.eu.id !== data.nota.autor.id) {
    return <p>Você não tem acesso para editar esta nota.</p>;
  }

  return <FormularioNota conteudo={data.nota.conteudo} action={editaNota} />;
};

export default EditaNota;