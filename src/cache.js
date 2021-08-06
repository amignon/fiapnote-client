import { InMemoryCache, makeVar } from '@apollo/client';

// Inicializa true if localStorage inclue uma chave 'token',
// caso contrário false
export const estaLogado = makeVar(!!localStorage.getItem("token"));

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        estaLogado: {
          read() {
            return estaLogado();
          } 
        }
      }
    }
  }
});