import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { Button, ImageWrapper, Text } from './styles';

interface IProps extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export const SignInSocialButton = ({ svg: Svg, title, ...rest }: IProps) => {
  return (
    <Button {...rest}>
      <ImageWrapper>
        <Svg />
      </ImageWrapper>

      <Text>{title}</Text>
    </Button>
  );
};
