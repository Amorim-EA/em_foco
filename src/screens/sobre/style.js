import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  align-items: center;
  flex: 1;
  width: 100vw;
`;

export const Title = styled.Text`
  margin-top: 1.5rem;
  font-size: 2.5rem;
  letter-spacing: 2px;
`;

export const Paragrafo = styled.Text`
  font-size: 0.92rem;
  width: 90vw;
  text-align: justify;
  letter-spacing: 0.5px;
`;

export const WrapperTime = styled.View`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  background-color: #fff;
  margin-top: 0.5rem;
`;

export const WrapperCards = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  background-color: #fff;
`;

export const TitleTime = styled.Text`
  font-size: 1.2rem;
  text-align: center;
  letter-spacing: 1px;
`;

export const Card = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: px;
  width: 100px;
  background-color: #fff;
`;

export const Imagem = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 60%;
  object-fit: cover;
  background-color: #333;
`;

export const Nome = styled.Text`
  font-size: 1rem;
`;

export const Funcao = styled.Text`
  font-size: 0.6rem;
`;