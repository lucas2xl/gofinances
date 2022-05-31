import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { value } from '../../../utils/dpi';

export const Wrapper = styled(RectButton)`
  width: 100%;
  align-items: center;
  justify-content: center;

  padding: 18px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.Text`
  font-size: ${value(14)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
