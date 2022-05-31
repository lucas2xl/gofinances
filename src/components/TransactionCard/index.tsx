import React from 'react';
import { categories } from '../../utils/categories';
import { dateFormatter } from '../../utils/formatter';
import {
  Wrapper,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';

export interface ITransactionCardProps {
  type: 'up' | 'down';
  name: string;
  amount: string;
  category: string;
  date: Date;
}

interface IProps {
  data: ITransactionCardProps;
}

export const TransactionCard = ({ data }: IProps) => {
  const category = categories.find((item) => item.key === data.category);

  return (
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
  );
};
