import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Nota from './Nota';

const ContainerNota = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

const ListaNotas = ({ notas }) => {
  return (
    <div>
      {notas.map(nota => (
        <ContainerNota key={nota.id}>
          <Nota nota={nota} />
          <Link to={`nota/${nota.id}`}>Link</Link>
        </ContainerNota>
      ))}
    </div>
  );
};

export default ListaNotas;