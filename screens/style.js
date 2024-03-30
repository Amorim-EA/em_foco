import styled from 'styled-components/native';

// Inicio screen Login
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 160px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100vw;
  border: 1px solid black;
`;

export const Title = styled.Text`
  font-size: 2.8rem;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
`;

export const ButtonLink = styled.TouchableOpacity`
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextLink = styled.Text`
  font-size: 1.8rem;
`;

export const Button = styled.TouchableOpacity`
  width: 180px;
  border: 3px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
    font-size: 1rem;
    color: #000;
    padding: 5px;
`;
// Fim Login