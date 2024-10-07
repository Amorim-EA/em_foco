import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    paddingVertical: 3,
    width: '100%',
  },
}))`
  flex: 1;
  background-color: #f2f2f2;
`;

export const Card = styled.View`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: 1rem 0;
`;

export const WrapperImgText = styled.View`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Image = styled.View`
  width: 7rem;
  height: 6rem;
  background-color: #0101;
`;

export const WrapperTitleDescription = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.Text`
  font-size: 1rem;
  color: #5a595d;
`;

export const Description = styled.Text`
  font-size: 1rem;
  color: #5a595d;
`;

export const WrapperInputs = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.Text`
  font-size: 1rem;
  color: #5a595d;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  color: #fff;
  width: 100%;
`;

export const Button = styled(Pressable)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0250bb;
  border-radius: 3px;
  padding: 3px;
  margin-top: 5px;
`;

export const TextButton = styled.View`
  font-size: 1rem;
  color: #fff;
`;