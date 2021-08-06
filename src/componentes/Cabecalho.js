import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import { useQuery } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';

import { estaLogado } from '../cache';
import BotaoLink from './BotaoLink';
import { ESTA_LOGADO } from '../gql/query';

const BarraCabecalho = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const EstadoUsuario = styled.div`
  margin-left: auto;
`;

const Cabecalho = props => {
  const { data } = useQuery(ESTA_LOGADO);

  return (
    <BarraCabecalho>
      <img src={logo} alt="Logo" height="40" />
      <LogoText>FiapNote</LogoText>
      <EstadoUsuario>
        {data.estaLogado ? (
          <BotaoLink
            onClick={() => {
              localStorage.removeItem('token');
              estaLogado(false);
              props.history.push('/');
            }}
          >
            Sair
          </BotaoLink>
        ) : (
          <p>
            <Link to={'/entrar'}>Entrar</Link> ou{' '}
            <Link to={'/inscrever'}>Inscrever</Link>
          </p>
        )}
      </EstadoUsuario>
    </BarraCabecalho>
  );
};

export default withRouter(Cabecalho);