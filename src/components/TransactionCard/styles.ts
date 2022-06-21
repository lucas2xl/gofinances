import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { value } from '../../utils/dpi';

interface IStyleProps {
  type: 'up' | 'down';
}

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;

  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${value(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Amount = styled.Text<IStyleProps>`
  font-size: ${value(20)}px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${value(20)}px;
  color: ${({ theme }) => theme.colors.text};

  padding-right: 16px;
`;

export const CategoryName = styled.Text`
  font-size: ${value(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Date = styled.Text`
  font-size: ${value(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ContainerSwipeable = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.attention};

  width: 30%;
  margin-bottom: 16px;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  align-items: center;
  justify-content: center;
`;
