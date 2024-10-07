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

export const Title = styled.Text`
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-align: center;
  margin: 1rem 0;
  color: #5a595d;
`;

export const Card = styled.View`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 90%;
  gap: 6px;
  background-color: #fff;
  border-radius: 5px;
  height: 200px;
  margin: 0;
  margin-bottom: 18px;
  padding: 10px;
`;

export const Title_Card = styled.Text`
  font-size: 1.2rem;
  color: #5a595d;

`;

export const Paragraph = styled.Text`
  font-size: 1rem;
  color: #5a595d;
`;