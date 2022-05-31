import styled from 'styled-components/native';
import { percentage, value } from '../../utils/dpi';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: flex-end;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${value(30)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;

  margin-top: 45px;
`;

export const Subtitle = styled.Text`
  font-size: ${value(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;

  margin: 80px 0 67px 0;
`;

export const Footer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonsWrapper = styled.View`
  margin-top: ${percentage(-4)}px;
  padding: 0 32px;

  justify-content: space-between;
`;
