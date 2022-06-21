import React, { useEffect, useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
  Alert,
  Keyboard,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Button,
  CategorySelectButton,
  InputForm,
  TransactionButton,
} from '../../components';
import { CategorySelect } from '../CategorySelect';
import {
  Wrapper,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from './styles';
import { ITransaction } from '../../storage/transaction';
import { storage } from '../../storage';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

interface IFormData extends FieldValues {}

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  amount: yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório'),
});

const defaultCategory = {
  key: 'category',
  name: 'categoria',
};

export const Register = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const priceRef = useRef<TextInput>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [transactionType, setTransactionType] = useState<
    'up' | 'down' | undefined
  >(undefined);

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState(defaultCategory);

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type);
  };

  const handleOpenCategorySelectModal = () => {
    setCategoryModalOpen(true);
  };

  const handleCloseCategorySelectModal = () => {
    setCategoryModalOpen(false);
  };

  const handleRegister = async (form: IFormData) => {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da trasação');
    } else if (category.key === defaultCategory.key) {
      return Alert.alert('Selecione a categoria');
    }

    const data: ITransaction = {
      id: new Date().getTime(),
      name: form.name,
      amount: form.amount,
      category: category.key,
      type: transactionType,
      date: new Date(),
    };

    try {
      await storage.transaction.save(data, user.id);

      reset();
      setTransactionType(undefined);
      setCategory(defaultCategory);

      navigation.navigate('dashboard');
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              placeholder="Nome"
              name="name"
              control={control}
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
              onSubmitEditing={() => priceRef.current?.focus()}
            />

            <InputForm
              ref={priceRef}
              placeholder="Preço"
              name="amount"
              control={control}
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

            <TransactionsTypes>
              <TransactionButton
                type="up"
                title="Income"
                onPress={() => handleTransactionTypeSelect('up')}
                isSelected={transactionType === 'up'}
              />
              <TransactionButton
                type="down"
                title="Outcome"
                onPress={() => handleTransactionTypeSelect('down')}
                isSelected={transactionType === 'down'}
              />
            </TransactionsTypes>

            <CategorySelectButton
              title={category.name}
              onPress={handleOpenCategorySelectModal}
            />
          </Fields>

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelect={handleCloseCategorySelectModal}
          />
        </Modal>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};
