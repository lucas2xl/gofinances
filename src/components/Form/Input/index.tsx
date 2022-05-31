import React from 'react';
import { TextInputProps } from 'react-native';
import { Wrapper } from './styles';

interface IProps extends TextInputProps {
  active?: boolean;
}

export const Input = ({ active = false, ...rest }: IProps) => {
  return <Wrapper active={active} {...rest}></Wrapper>;
};
