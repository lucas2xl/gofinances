import React from 'react';
import { render } from '@testing-library/react-native';
import { Input } from '../../components/Form/Input';

describe('Input Component', () => {
  it('Must have specific border color when active', () => {
    const { getByTestId } = render(
      <Input
        testID="input"
        placeholder="email"
        keyboardType="email-address"
        autoCorrect={false}
        active
      />
    );

    const input = getByTestId('input');

    expect(input.props.style[0].borderColor).toBe('#E83F5B');
    expect(input.props.style[0].borderWith).toBe(3);
  });
});
