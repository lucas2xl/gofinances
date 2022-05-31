import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Wrapper, Button, Icon, Title } from './styles';

interface IProps extends RectButtonProps {
  title: string;
  type: 'up' | 'down';
  isSelected: boolean;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

export const TransactionButton = ({
  title,
  type,
  isSelected,
  ...rest
}: IProps) => {
  return (
    <Wrapper isSelected={isSelected} type={type}>
      <Button {...rest}>
        <Icon name={icon[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Wrapper>
  );
};
