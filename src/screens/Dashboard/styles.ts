import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

import { percentage, value } from '../../utils/dpi';
import { IDataListProps } from '.';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LoadWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  width: 100%;
  height: ${percentage(40)}px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 8%;

  margin-top: ${getStatusBarHeight() + value(28)}px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.Image`
  width: ${value(48)}px;
  height: ${value(48)}px;

  border-radius: 10px;
`;
export const User = styled.View`
  margin-left: 15px;
`;
export const USerGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${value(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${value(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-transform: capitalize;
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${value(24)}px;
`;

export const HighlighCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: '8%' },
})`
  width: 100%;
  position: absolute;

  margin-top: ${percentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;

  padding: 0 8%;
  margin-top: ${percentage(12)}px;
`;

export const Title = styled.Text`
  font-size: ${value(18)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 16px;
`;

export const TransactionList = styled(
  FlatList as new (
    props: FlatListProps<IDataListProps>
  ) => FlatList<IDataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: getBottomSpace() },
})``;
