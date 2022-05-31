import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { value } from '../../../utils/dpi';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled(RectButton)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 18px 16px;
`;

export const Category = styled.Text`
  font-size: ${value(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Feather)`
  font-size: ${value(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;
