import React from 'react';
import {
  Wrapper,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

interface IProps {
  title: string;
  type: 'up' | 'down' | 'total';
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};
export const HighlighCard = ({
  title,
  type,
  amount,
  lastTransaction,
}: IProps) => {
  return (
    <Wrapper type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Wrapper>
  );
};
