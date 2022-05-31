import React, { useContext, useEffect, useState } from 'react';
import {
  Wrapper,
  Header,
  TitleWrapper,
  Title,
  Subtitle,
  Footer,
  ButtonsWrapper,
} from './styles';
import AppleSVG from '../../assets/apple.svg';
import GoogleSVG from '../../assets/google.svg';
import LogoSVG from '../../assets/logo.svg';
import { value } from '../../utils/dpi';
import { SignInSocialButton } from '../../components';
import { useAuth } from '../../hooks/auth';
import { ActivityIndicator, Alert, Platform } from 'react-native';
import { useTheme } from 'styled-components';

interface IProps {}

export const SignIn = ({}: IProps) => {
  const { signInWithGoogle, signInWithApple } = useAuth();
  const { colors } = useTheme();

  const handleSignInWithGoogle = async () => {
    try {
      return await signInWithGoogle();
    } catch (error: any) {
      console.log(error);
      Alert.alert('Não foi possivel conectar a conta google');
    }
  };

  const handleSignInWithApple = async () => {
    try {
      return await signInWithApple();
    } catch (error: any) {
      console.log(error);
      Alert.alert('Não foi possivel conectar a conta google');
    }
  };

  return (
    <Wrapper>
      <Header>
        <TitleWrapper>
          <LogoSVG width={value(120)} height={value(68)} />
          <Title>
            Controle suas{'\n'} finaças de forma{'\n'} muito simples
          </Title>

          <Subtitle>Faça seu login com{'\n'} uma das contas abaixo</Subtitle>
        </TitleWrapper>
      </Header>

      <Footer>
        <ButtonsWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSVG}
            onPress={handleSignInWithGoogle}
          />

          {Platform.OS === 'ios' && (
            <SignInSocialButton
              title="Entrar com Apple"
              svg={AppleSVG}
              onPress={handleSignInWithApple}
            />
          )}
        </ButtonsWrapper>
      </Footer>
    </Wrapper>
  );
};
