import React from 'react';
import * as S from './style';

export default function Sobre() {
  return (
      <S.Container>
          <S.Title>Sobre Nós</S.Title>
          <S.WrapperTime>
              <S.TitleTime>Desenvolvedores</S.TitleTime>
              <S.WrapperCards>
                  <S.Card>
                      <S.Imagem ></S.Imagem>
                      <S.Nome>Renato Garcia</S.Nome>
                      <S.Funcao>Docente</S.Funcao>
                  </S.Card>
                  <S.Card>
                      <S.Imagem source={{ uri: 'https://avatars.githubusercontent.com/u/101286204?v=4' }} />
                      <S.Nome>Erick Amorim</S.Nome>
                      <S.Funcao>Dicente</S.Funcao>
                  </S.Card>
                  <S.Card>
                      <S.Imagem source={{ uri: 'https://avatars.githubusercontent.com/u/100858468?v=4' }}></S.Imagem>
                      <S.Nome>Eder Amorim</S.Nome>
                      <S.Funcao>Dicente</S.Funcao>
                  </S.Card>
              </S.WrapperCards>
          </S.WrapperTime>
      </S.Container>
  );
}