import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FlatList, FlatListProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { category } from '../../utils/categories';
import { value } from '../../utils/dpi';

interface ICategoryProps {
  isSelected: boolean;
}

export const Wrapper = styled(GestureHandlerRootView)`
  flex: 1;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${value(113)}px;

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: ${value(18)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const CategoriesList = styled(
  FlatList as new (props: FlatListProps<category>) => FlatList<category>
).attrs({
  showsVerticalScrollIndicator: false,
  ItemSeparatorComponent: Separator,
})`
  flex: 1;
  width: 100%;
`;

export const Name = styled.Text`
  font-size: ${value(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Category = styled.TouchableOpacity<ICategoryProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;

  padding: ${value(15)}px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.secondary_light : 'transparent'};
`;

export const Icon = styled(Feather)`
  font-size: ${value(20)}px;

  margin-right: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
