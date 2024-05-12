import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  align-items: center;
  flex: 1;
  width: 100vw;
`;

export const Title = styled.Text`
  margin-top: 1.5rem;
  font-size: 2.5rem;
  width: 90vw;
  text-align: center;
`;

export const InputsWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  background-color: #fff;
  width: 90vw;
`;

export const Input = styled.TextInput`
  padding-bottom: 0.3rem;
	border-color: #000;
	border-bottom-width: 2px;
	outline-width: 0;
	color: #000;
`;

export const ButtonEnviar = styled.TouchableOpacity`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  border-radius: 3px;
`;

export const TextButton = styled.Text`
    font-size: 1rem;
    color: #000;
    padding: 5px;
`;