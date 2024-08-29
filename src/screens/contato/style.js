import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  align-items: center;
  flex: 1;
  width: 100%;
  padding-top: 2rem;
`;

export const InputsWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  background-color: #fff;
  width: 90%;
`;

export const Input = styled.TextInput`
  padding-bottom: 0.3rem;
	border-color: #000;
	border-bottom-width: 2px;
	outline-width: 0;
	color: #000;
  width: 98%;
`;

export const TextArea = styled.TextInput`
	background-color: #fff;
	outline-width: 0;
	color: #000;
	width: 98%;
  text-align-vertical: top;
  padding: 3px;
  border-color: #000;
  border-width: 2px;
  border-radius: 3px;
`;

export const ButtonEnviar = styled.TouchableOpacity`
  width: 100%;
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