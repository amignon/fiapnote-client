import React from 'react';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';

import BotaoLink from './BotaoLink';
import { EXCLUI_NOTA } from '../gql/mutation';
import { OBTER_MINHAS_NOTAS, OBTER_NOTAS } from '../gql/query';

const ExcluiNota = props => {
  const [excluiNota] = useMutation(EXCLUI_NOTA, {
    variables: {
      id: props.notaId
    },
    refetchQueries: [{ query: OBTER_MINHAS_NOTAS, OBTER_NOTAS }],
    onCompleted: data => {
      props.history.push('/minhasNotas');
    }
  });

  return <BotaoLink onClick={excluiNota}>Excluir Nota</BotaoLink>;
};

export default withRouter(ExcluiNota);