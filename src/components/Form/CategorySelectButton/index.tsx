import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Wrapper, Category, Icon } from './styles';

interface IProps extends RectButtonProps {
  title: string;
}

export const CategorySelectButton = ({ title, ...rest }: IProps) => {
  return (
    <Wrapper activeOpacity={0.1} {...rest}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Wrapper>
  );
};
