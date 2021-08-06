import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Layout from '../componentes/Layout'
import { ESTA_LOGADO } from '../gql/query';

import Inicio from './inicio';
import MinhasNotas from './minhas_notas';
import Favoritos from './favoritos';
import PaginaNota from './nota'
import Inscrever from './inscrever'
import Entrar from './entrar'
import NovaNota from './nova_nota';
import EditaNota from './edita';

const Paginas = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Inicio} />
        <PrivateRoute path="/minhasNotas" component={MinhasNotas} />
        <PrivateRoute path="/favoritos" component={Favoritos} />
        <Route path="/nota/:id" component={PaginaNota}/>
        <Route path="/inscrever" component={Inscrever}/>
        <Route path="/entrar" component={Entrar}/>
        <PrivateRoute path="/nova_nota" component={NovaNota} />
        <PrivateRoute path="/edita/:id" component={EditaNota} />
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(ESTA_LOGADO);
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro!</p>;
  return (
    <Route
      {...rest}
      render={props =>
        data.estaLogado === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/entrar',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default Paginas;