import styled from 'styled-components/native';
import { value } from '../../utils/dpi';

interface IStyleProps {
  color: string;
}
export const Wrapper = styled.View<IStyleProps>`
  flex-direction: row;
  width: 100%;

  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.shape};

  padding: 13px 24px;
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};

  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: ${value(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Amount = styled.Text`
  font-size: ${value(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text_dark};
`;
