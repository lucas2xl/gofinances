import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { value } from '../../utils/dpi';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${value(113)}px;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: ${value(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 0 24px;
`;

export const ChartWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const MonthSelect = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 24px;
`;

export const MonthSelectButton = styled(BorderlessButton)``;

export const SelectIcon = styled(Feather)`
  font-size: ${value(24)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Month = styled.Text`
  font-size: ${value(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const LoadWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
