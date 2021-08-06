import React, { useState } from 'react';
import styled from 'styled-components';

import Botao from './Botao';

const Container = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }
  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

const Formulario = props => {
  const [valores, setValores] = useState();

  const onChange = event => {
    setValores({
      ...valores,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container>
      {/* Mostra o cabecalho apropriado */}
      {props.formType === 'inscrever' ? <h2>Inscrever</h2> : <h2>Entrar</h2>}
      {/* realiza a mutação quando o usuario submeter o formulario */}
      <Form
        onSubmit={event => {
          event.preventDefault();
          props.action({
            variables: {
              ...valores
            }
          });
        }}
      >
        {props.formType === 'inscrever' && (
          <React.Fragment>
            <label htmlFor="nomeUsuario">Usuario:</label>
            <input
              required
              type="text"
              id="nomeUsuario"
              name="nomeUsuario"
              placeholder="Usuário"
              onChange={onChange}
            />
          </React.Fragment>
        )}
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <label htmlFor="senha">Senha:</label>
        <input
          required
          type="password"
          id="senha"
          name="senha"
          placeholder="Senha"
          onChange={onChange}
        />
        <Botao type="submit">Enviar</Botao>
      </Form>
    </Container>
  );
};

export default Formulario;