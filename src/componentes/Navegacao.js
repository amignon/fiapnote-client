import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;
  @media (max-width: 700px) {
    padding-top: 64px;
  }
  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }
  a:visited {
    color: #333;
  }
  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

const Navegacao = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/">
            <span aria-hidden="true" role="img">
              🏠
            </span>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/minhasNotas">
            <span aria-hidden="true" role="img">
              📓
            </span>
            Minhas Notas
          </Link>
        </li>
        <li>
          <Link to="/favoritos">
            <span aria-hidden="true" role="img">
              🌟
            </span>
            Favoritos
          </Link>
        </li>
        <li>
          <Link to="/nova_nota">
            <span aria-hidden="true" role="img">
              ➕
            </span>
            Nova Nota
          </Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default Navegacao;