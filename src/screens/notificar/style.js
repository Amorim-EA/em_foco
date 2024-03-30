import styled from 'styled-components/native';
import { CheckBox } from 'react-native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: #fff;
  align-items: center;
  flex: 1;
  width: 100vw;
`;

export const Title = styled.Text`
  margin-top: 2rem;
  font-size: 1.8rem;
  text-align: center;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const InputWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #fff;
`;

export const CheckBoxWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  width: 90vw;
`;

export const Label = styled.Text`
	color: #000;
`;

export const TextArea = styled.TextInput`
	background-color: #E5E5E5;
	outline-width: 0;
	color: #000;
	width: 90vw;
  text-align-vertical: top;
  padding: 3px;
`;

export const LocalizacaoCheck = styled(CheckBox)`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 6px;
`;

export const Input = styled.TextInput`
	background-color: #E5E5E5;
	outline-width: 0;
	color: #000;
	width: 90vw;
  padding: 3px;
`;

export const Mapa = styled.View`
	background-color: #E5E5E5;
	width: 90vw;
	height: 12rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TirarFotoButton = styled.TouchableOpacity`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E5E5E5;
  border-radius: 3px;
`;

export const UploadFotosButton = styled.TouchableOpacity`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E5E5E5;
  border-radius: 3px;
`;

export const FotosWrapper = styled.View`
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px
`;

export const Foto = styled.Image`
  background-color: #E5E5E5;
  height: 6rem;
`;

export const NotificarButton = styled.TouchableOpacity`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00f30c;
  border-radius: 3px;
`;

export const TextButton = styled.Text`
    font-size: 1rem;
    color: #000;
    padding: 5px;
`;