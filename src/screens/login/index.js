import React from 'react';
import * as S from './style';

export default function Login() {
  return (
      <S.Container>
          <S.Title>Em Foco!</S.Title>
          <S.LinksPagesWrapper>
              <S.LinkButton  to={{ screen: 'Sobre'}}>
                  <S.TextLink>Sobre</S.TextLink>
              </S.LinkButton>
              <S.LinkButton to={{ screen: 'Contato'}}>
                  <S.TextLink>Contato</S.TextLink>
              </S.LinkButton>
          </S.LinksPagesWrapper>
          <S.ButtonsWrapper>
              <S.AuthButton>
                  <S.TextButton>LOGIN COM .GOV</S.TextButton>
              </S.AuthButton>
              <S.CadastroButton>
                  <S.TextButton>CADASTRE-SE .GOV</S.TextButton>
              </S.CadastroButton>
          </S.ButtonsWrapper>
      </S.Container>
  );
}