import styled from 'styled-components/native';
import { value } from '../../../utils/dpi';

export const Wrapper = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-size: ${value(12)}px;
  color: ${({ theme }) => theme.colors.attention};
  font-family: ${({ theme }) => theme.fonts.regular};

  margin: 7px 0;
`;
