import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { estaLogado } from '../cache'

import Formulario from '../componentes/Formulario';
import {ENTRAR_USUARIO} from '../gql/mutation';

const Entrar = props => {
  useEffect(() => {
    document.title = 'Entrar — FiapNote';
  });

  const [entrar, { loading, error }] = useMutation(ENTRAR_USUARIO, {
    onCompleted: data => {
      // armazena o token
      localStorage.setItem('token', data.entrar);
      // atualiza o cache
      estaLogado(true)
      // redireciona para a pagina inicial
      props.history.push('/');
    }
  });

  return (
    <React.Fragment>
      <Formulario action={entrar} formType="entrar" />
      {loading && <p>Carregando...</p>}
      {error && <p>Erro ao entrar!</p>}
    </React.Fragment>
  );
};

export default Entrar;