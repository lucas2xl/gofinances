import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { value } from '../../utils/dpi';

export const Button = styled(RectButton)`
  width: 100%;
  height: ${value(56)}px;
  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
  align-items: center;
  flex-direction: row;

  margin-bottom: 16px;
`;

export const ImageWrapper = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: ${value(16)}px;
  border-color: ${({ theme }) => theme.colors.background};

  border-right-width: 1px;
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;

  font-size: ${value(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};
`;
