import React, { forwardRef } from 'react';
import { TextInputProps } from 'react-native';
import { Wrapper } from './styles';

interface IProps extends TextInputProps {
  active?: boolean;
}

export const Input = forwardRef(({ active = false, ...rest }: IProps, ref) => {
  return <Wrapper ref={ref as any} active={active} {...rest}></Wrapper>;
});
