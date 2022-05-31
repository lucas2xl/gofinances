import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { value } from '../../../utils/dpi';
import { RectButton } from 'react-native-gesture-handler';

interface IIconProps {
  type: 'up' | 'down';
}

interface IWrapperProps extends IIconProps {
  isSelected: boolean;
}

export const Wrapper = styled.View<IWrapperProps>`
  width: 49%;

  border-radius: 5px;

  margin-bottom: 8px;
  border: 1.5px solid
    ${({ theme, isSelected }) =>
      isSelected ? 'transparent' : theme.colors.text};

  ${({ isSelected, type }) =>
    isSelected &&
    type === 'up' &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `};

  ${({ isSelected, type }) =>
    isSelected &&
    type === 'down' &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `};
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 18px;
`;

export const Icon = styled(Feather)<IIconProps>`
  font-size: ${value(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-size: ${value(14)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
