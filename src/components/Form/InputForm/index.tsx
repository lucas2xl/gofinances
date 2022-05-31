import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import { Wrapper, Error } from './styles';

interface IProps extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export const InputForm = ({ control, name, error, ...rest }: IProps) => {
  return (
    <Wrapper>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            {...rest}
          />
        )}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};
