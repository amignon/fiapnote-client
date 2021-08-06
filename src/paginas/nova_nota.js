import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import FormularioNota from '../componentes/FormularioNota';
import { NOVA_NOTA } from '../gql/mutation';
import { OBTER_MINHAS_NOTAS, OBTER_NOTAS } from '../gql/query';

const NovaNota = props => {
  useEffect(() => {
    document.title = 'Nova Nota - FiapNote';
  });

  const [data, { loading, error }] = useMutation(NOVA_NOTA, {
    refetchQueries: [{ query: OBTER_MINHAS_NOTAS }, { query: OBTER_NOTAS }],
    onCompleted: data => {
      props.history.push(`nota/${data.novaNota.id}`);
    }
  });

  return (
    <React.Fragment>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro ao salvar a nota</p>}
      <FormularioNota action={data} />
    </React.Fragment>
  );
};

export default NovaNota;