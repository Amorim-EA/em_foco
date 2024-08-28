import React from 'react';
import * as S from './style';

export default function Contato() {
  return (
      <S.Container>
          <S.Title>Contato</S.Title>
          <S.InputsWrapper>
              <S.Input
                placeholder="Nome"
              />
              <S.Input
                placeholder="Email"
              />
              <S.Input
                placeholder="Assunto"
              />
              <S.Input
                placeholder="Mensagem"
              />
              <S.ButtonEnviar>
                  <S.TextButton>Enviar Mensagem</S.TextButton>
              </S.ButtonEnviar>
          </S.InputsWrapper>
      </S.Container>
  );
}