import React from 'react';
import styled from 'styled-components';

import Cabecalho from './Cabecalho';
import Navegacao from './Navegacao';

const Container = styled.div`
  @media (min-width: 700px) {
    display: flex;
    top: 64px;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column;
  }
`;

const Principal = styled.main`
  position: fixed;
  height: calc(100% - 185px);
  width: 100%;
  padding: 1em;
  overflow-y: scroll;
  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Cabecalho />
      <Container>
        <Navegacao />
        <Principal>{children}</Principal>
      </Container>
    </React.Fragment>
  );
};

export default Layout;