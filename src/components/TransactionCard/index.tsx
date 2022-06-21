import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';
import { dateFormatter } from '../../utils/formatter';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Wrapper,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
  ContainerSwipeable,
} from './styles';
import { useTheme } from 'styled-components';

export interface ITransactionCardProps {
  type: 'up' | 'down';
  name: string;
  amount: string;
  category: string;
  date: Date;
}

interface IProps {
  data: ITransactionCardProps;
  onPressRemove: () => void;
}

export const TransactionCard = ({ data, onPressRemove }: IProps) => {
  const { colors } = useTheme();
  const category = categories.find((item) => item.key === data.category);

  const getRightContent = () => {
    return (
      <ContainerSwipeable activeOpacity={0.5} onPress={onPressRemove}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.shape}
          size={50}
        />
      </ContainerSwipeable>
    );
  };

  return (
    <Swipeable renderRightActions={getRightContent}>
      <Wrapper>
        <Title>{data.name}</Title>
        <Amount type={data.type}>
          {data.type === 'down' && '- '}
          {data.amount}
        </Amount>

        <Footer>
          <Category>
            <Icon name={category?.icon} />
            <CategoryName>{category?.name}</CategoryName>
          </Category>

          <Date>{dateFormatter(data.date)}</Date>
        </Footer>
      </Wrapper>
    </Swipeable>
  );
};
