import React, { useState } from 'react';
import styled from 'styled-components';

import Botao from './Botao';

const Container = styled.div`
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
`;

const FormularioNota = props => {
  const [valor, setValor] = useState({ conteudo: props.conteudo || '' });

  const onChange = event => {
    setValor({
      ...valor,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container>
      <Form
        onSubmit={e => {
          e.preventDefault();
          props.action({
            variables: {
              ...valor
            }
          });
        }}
      >
        <TextArea
          required
          type="text"
          name="conteudo"
          placeholder="Conteúdo da Nota"
          value={valor.conteudo}
          onChange={onChange}
        />
        <Botao type="submit">Salvar</Botao>
      </Form>
    </Container>
  );
};

export default FormularioNota;