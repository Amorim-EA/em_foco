import React from 'react';
import * as S from './style';

export default function Contato() {
  return (
      <S.Container>
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
              <S.TextArea
                placeholder="Escreva uma breve mensagem"
                multiline={true}
                numberOfLines={4}
              />
              <S.ButtonEnviar>
                  <S.TextButton>Enviar Mensagem</S.TextButton>
              </S.ButtonEnviar>
          </S.InputsWrapper>
      </S.Container>
  );
}