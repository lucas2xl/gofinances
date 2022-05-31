import React from 'react';
import { render } from '@testing-library/react-native';
import { Profile } from '../../screens/Profile';

describe('Profile Screen', () => {
  it('Should have placeholder correctly in user name input', () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText('Nome');

    expect(inputName.props.placeholder).toBeTruthy();
  });

  it('Should be load user data', () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId('input-name');
    const inputLastName = getByTestId('input-last-name');

    expect(inputName.props.value).toEqual('Lucas');
    expect(inputLastName.props.value).toEqual('Aguiar');
  });

  it('Should exist correctly title', () => {
    const { getByTestId } = render(<Profile />);

    const title = getByTestId('text-title');
    expect(title.props.children).toContain('Perfil');
  });
});
