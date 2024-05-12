import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 160px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100vw;
`;

export const Title = styled.Text`
  font-size: 2.8rem;
  letter-spacing: 3px;
`;

export const LinksPagesWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
`;

export const ButtonsWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
`;

export const LinkButton = styled.TouchableOpacity`
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextLink = styled.Text`
  font-size: 1.8rem;
  letter-spacing: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  width: 180px;
  border: 3px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CadastroButton = styled.TouchableOpacity`
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