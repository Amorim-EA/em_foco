import React from 'react';
import {
    Container,
    Title,
    Wrapper,
    ButtonLink,
    TextLink,
    Button,
    TextButton
} from './style';

export default function Login() {
  return (
      <Container>
          <Title>Em foco!</Title>
          <Wrapper>
              <ButtonLink>
                  <TextLink>Sobre</TextLink>
              </ButtonLink>
              <ButtonLink>
                  <TextLink>Contato</TextLink>
              </ButtonLink>
          </Wrapper>
          <Wrapper>
              <Button>
                  <TextButton>LOGIN COM .GOV</TextButton>
              </Button>
              <Button>
                  <TextButton>CADASTRE-SE .GOV</TextButton>
              </Button>
          </Wrapper>
      </Container>
  );
}