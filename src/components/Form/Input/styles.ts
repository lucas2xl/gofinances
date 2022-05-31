import styled, { css } from 'styled-components/native';
import { value } from '../../../utils/dpi';

interface IInputStyle {
  active: boolean;
}

export const Wrapper = styled.TextInput<IInputStyle>`
  width: 100%;

  padding: 16px 18px;
  font-size: ${value(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin-bottom: 8px;

  ${({ active, theme }) =>
    active &&
    css`
      border: 3px solid ${theme.colors.attention};
    `}
`;
