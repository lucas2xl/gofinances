import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Dimensions, ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { HighlighCard, TransactionCard } from '../../components';
import { ITransactionCardProps } from '../../components/TransactionCard';
import { useAuth } from '../../hooks/auth';
import { storage } from '../../storage';
import { ITransaction } from '../../storage/transaction';
import { currencyFormatter, dateFormatterLong } from '../../utils/formatter';
import {
  Avatar,
  LoadWrapper,
  Header,
  UserWrapper,
  User,
  USerGreeting,
  UserInfo,
  UserName,
  Wrapper,
  LogoutButton,
  Icon,
  HighlighCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface IDataListProps extends ITransactionCardProps {
  id: number;
}

interface IHighlighProps {
  amount: number;
  lastTransaction: Date;
}

interface IHighlighData {
  entries: IHighlighProps;
  expensive: IHighlighProps;
  total: IHighlighProps;
}

const WIDTH = Dimensions.get('window').width;

export const Dashboard = () => {
  const { user, signOut, isLoading: isUserLoading } = useAuth();
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransaction] = useState<IDataListProps[]>([]);
  const [highlighData, setHighlighData] = useState<IHighlighData | undefined>();
  const scrollViewRef = useRef<ScrollView>(null);
  const [pos, setPos] = useState(0);

  useFocusEffect(
    useCallback(() => {
      getTransactions();
    }, [])
  );

  const getLastTransactionDate = (
    transactions: IDataListProps[],
    type: 'up' | 'down'
  ) => {
    const lastTransactions = Math.max.apply(
      Math,
      transactions
        .filter((transaction) => transaction.type === type)
        .map((item) => new Date(item.date).getTime())
    );

    return new Date(lastTransactions);
  };

  const getTransactions = async () => {
    const result = await storage.transaction.get(user.id);
    let entriesTotal = 0;
    let expensiveTotal = 0;

    if (result.length > 0) {
      const transactions: IDataListProps[] = result.map(
        (item: ITransaction) => {
          if (item.type === 'up') {
            entriesTotal += Number(item.amount);
          } else {
            expensiveTotal += Number(item.amount);
          }
          return {
            id: item.id,
            name: item.name,
            type: item.type,
            category: item.category,
            amount: currencyFormatter(Number(item.amount)),
            date: item.date,
          };
        }
      );
      setTransaction(
        transactions.sort((a, b) =>
          new Date(a.date).getTime() < new Date(b.date).getTime()
            ? 1
            : new Date(b.date).getTime() < new Date(a.date).getTime()
            ? -1
            : 0
        )
      );

      const lastTransactionsEntries = getLastTransactionDate(
        transactions,
        'up'
      );
      const lastTransactionsExpensive = getLastTransactionDate(
        transactions,
        'down'
      );

      setHighlighData({
        entries: {
          amount: entriesTotal,
          lastTransaction: lastTransactionsEntries,
        },
        expensive: {
          amount: expensiveTotal,
          lastTransaction: lastTransactionsExpensive,
        },
        total: {
          amount: entriesTotal - expensiveTotal,
          lastTransaction: new Date(),
        },
      });
    } else {
      setTransaction([]);
      setHighlighData(undefined);
    }
    setIsLoading(false);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      Alert.alert('Não foi possivel sair da conta');
    }
  };

  const handleRemove = async (item: IDataListProps) => {
    try {
      await storage.transaction.remove(user.id, item.id);
      await getTransactions();
    } catch (error) {
      Alert.alert('Error!', `${error}`);
    }
  };

  return (
    <Wrapper>
      {isLoading || isUserLoading ? (
        <LoadWrapper>
          <ActivityIndicator size="large" color={colors.secondary} />
        </LoadWrapper>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Avatar
                  source={{ uri: user.avatar || 'https://i.pravatar.cc/300' }}
                />

                <User>
                  <USerGreeting>Olá,</USerGreeting>
                  <UserName>{user.name}</UserName>
                </User>
              </UserInfo>

              <LogoutButton onPress={handleSignOut}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>

          <HighlighCards>
            <HighlighCard
              title="Entradas"
              amount={currencyFormatter(highlighData?.entries?.amount)}
              lastTransaction={`Última entrada dia ${dateFormatterLong(
                highlighData?.entries.lastTransaction
              )}`}
              type="up"
            />
            <HighlighCard
              title="Saidas"
              amount={currencyFormatter(highlighData?.expensive?.amount)}
              lastTransaction={`Última saída dia ${dateFormatterLong(
                highlighData?.expensive.lastTransaction
              )}`}
              type="down"
            />
            <HighlighCard
              title="Total"
              amount={currencyFormatter(highlighData?.total.amount)}
              lastTransaction={`${dateFormatterLong(
                highlighData?.entries.lastTransaction
              )} á ${dateFormatterLong(
                highlighData?.expensive.lastTransaction
              )}`}
              type="total"
            />
          </HighlighCards>

          <Transactions>
            <Title>Listagem</Title>

            <TransactionList
              data={transactions}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <TransactionCard
                  onPressRemove={() => handleRemove(item)}
                  data={item}
                />
              )}
            />
          </Transactions>
        </>
      )}
    </Wrapper>
  );
};
