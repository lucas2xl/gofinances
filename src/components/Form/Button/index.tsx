import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Wrapper, Title } from './styles';

interface IProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}
export const Button = ({ title, ...rest }: IProps) => {
  return (
    <Wrapper {...rest}>
      <Title>{title}</Title>
    </Wrapper>
  );
};
