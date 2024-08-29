import React from 'react';
import * as S from './style';

export default function Sobre() {
  return (
      <S.Container>
          <S.Paragrafo>
            Olá! Somos a equipe de desenvolvimento do aplicativo para mapeamento de focos da dengue, comprometidos em utilizar a tecnologia para combater a propagação da dengue em nossa comunidade. Nossa equipe é composta pelo professor orientador e dois estudantes do Instituto Federal de Mato Grosso do Sul (IFMS).
          </S.Paragrafo>
          <S.Paragrafo>
            Este projeto não é apenas uma iniciativa acadêmica, mas sim uma resposta direta de controlar a disseminação da dengue em nossa região. Através da análise e mapeamento dos focos da doença, buscamos fornecer dados valiosos para as autoridades de saúde e para a população, a fim de orientar ações preventivas e de combate eficazes.
          </S.Paragrafo>
          <S.Paragrafo>
            Agradecemos pelo apoio e pela oportunidade de contribuir para a saúde pública por meio deste projeto. Junte-se a nós nessa missão contra a dengue!
          </S.Paragrafo>
          
          <S.WrapperTime>
              <S.TitleTime>Desenvolvedores</S.TitleTime>
              <S.WrapperCards>
                  <S.Card>
                      <S.Imagem source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYRg3UbwFBdhdZ6hlOtx_jiHlkxRz5Zodwca5R-k&s' }}></S.Imagem>
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