import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { value } from '../../utils/dpi';

interface IStyleProps {
  type: 'up' | 'down' | 'total';
}

export const Wrapper = styled.View<IStyleProps>`
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  width: ${value(280)}px;
  border-radius: 5px;

  padding: 19px 23px ${value(38)}px 23px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<IStyleProps>`
  font-size: ${value(14)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Feather)<IStyleProps>`
  font-size: ${value(40)}px;

  ${({ type }) =>
    type === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  ${({ type }) =>
    type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}

  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<IStyleProps>`
  font-size: ${value(32)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.medium};

  margin-top: 30px;
`;

export const LastTransaction = styled.Text<IStyleProps>`
  font-size: ${value(12)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.title : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
