import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { estaLogado } from '../cache'

import Formulario from '../componentes/Formulario';
import { INSCREVER_USUARIO } from '../gql/mutation'

const Inscrever = props => {
  useEffect(() => {
    document.title = 'Inscrever — FiapNote';
  });

  const [inscrever, { loading, error }] = useMutation(INSCREVER_USUARIO, {
    onCompleted: data => {
      // armazena o token
      localStorage.setItem('token', data.inscrever);
      // atualiza o cache
      estaLogado(true)
      // redireciona para a pagina inicial
      props.history.push('/');
    }
  });

  return (
    <React.Fragment>
      <Formulario action={inscrever} formType="inscrever" />
      {loading && <p>Carregando...</p>}
      {error && <p>Erro!</p>}
    </React.Fragment>
  );
};

export default Inscrever;