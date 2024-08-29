import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import * as S from './style';

export default function Notificar() {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    
    return (
        <S.Container>
            <ScrollView>
            <S.Wrapper>
                <S.InputWrapper>
                    <S.Label>Descrição</S.Label>
                    <S.TextArea
                        placeholder="Escreva uma breve descrição"
                        multiline={true}
                        numberOfLines={4}
                    />
                </S.InputWrapper>
                <S.CheckBoxWrapper>
                    <S.LocalizacaoCheck
                        value={isChecked}
                        onValueChange={toggleCheckbox}
                    />
                    <S.Label>Capturar minha localização</S.Label>
                </S.CheckBoxWrapper>
                <S.Mapa>
                    Mapa
                </S.Mapa>
                <S.TirarFotoButton>
                    <S.TextButton>Tirar Foto</S.TextButton>
                </S.TirarFotoButton>
                <S.UploadFotosButton>
                    <S.TextButton>Fazer Upload de foto da galeria</S.TextButton>
                </S.UploadFotosButton>
                <S.FotosWrapper>
                    <S.Foto />
                    <S.Foto />
                    <S.Foto />
                </S.FotosWrapper>
                <S.NotificarButton>
                    <S.TextButton>Fazer a notificação!</S.TextButton>
                </S.NotificarButton>
            </S.Wrapper>
            </ScrollView>
        </S.Container>
    );
}