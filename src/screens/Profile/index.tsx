import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

interface IProps {}

export const Profile = ({}: IProps) => {
  return (
    <View>
      <Text testID="text-title">Perfil</Text>

      <TextInput
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
        value={'Lucas'}
      />
      <TextInput
        testID="input-last-name"
        placeholder="Sobrenome"
        autoCorrect={false}
        value={'Aguiar'}
      />

      <TouchableOpacity onPress={() => {}}>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};
