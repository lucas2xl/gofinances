import React, { forwardRef } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Input } from '../Input';
import { Wrapper, Error } from './styles';

interface IProps extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export const InputForm = forwardRef(
  ({ control, name, error, ...rest }: IProps, ref) => {
    const { colors } = useTheme();

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
              placeholderTextColor={colors.text}
              ref={ref}
              {...rest}
            />
          )}
        />
        {error && <Error>{error}</Error>}
      </Wrapper>
    );
  }
);
