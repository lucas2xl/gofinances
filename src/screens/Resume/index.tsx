import { useFocusEffect } from '@react-navigation/native';
import { addMonths, format, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { VictoryPie } from 'victory-native';
import { HistoryCard } from '../../components';
import { useAuth } from '../../hooks/auth';
import { storage } from '../../storage';
import { categories } from '../../utils/categories';
import { value } from '../../utils/dpi';
import { currencyFormatter } from '../../utils/formatter';
import { IDataListProps } from '../Dashboard';
import {
  Wrapper,
  Header,
  Title,
  Content,
  ChartWrapper,
  MonthSelect,
  MonthSelectButton,
  SelectIcon,
  Month,
  LoadWrapper,
} from './styles';

interface IProps {}

interface ICategoryData {
  name: string;
  total: number;
  key: string;
  color: string;
  percent: string;
}

export const Resume = ({}: IProps) => {
  const { user } = useAuth();
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [totalCategories, setTotalCategories] = useState<ICategoryData[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [selectedDate])
  );

  const loadData = async () => {
    setIsLoading(true);

    const totalCategory: ICategoryData[] = [];
    const result: IDataListProps[] = await storage.transaction.get(user.id);

    const expensive = result.filter(
      (item) =>
        item.type === 'down' &&
        new Date(item.date).getMonth() === selectedDate.getMonth() &&
        new Date(item.date).getFullYear() === selectedDate.getFullYear()
    );

    const expensiveTotal = expensive.reduce(
      (accumulator: number, spending: IDataListProps) => {
        return (accumulator += Number(spending.amount));
      },
      0
    );

    categories.forEach((category) => {
      let total = 0;

      expensive.forEach((item) => {
        if (category.key === item.category) {
          total += Number(item.amount);
        }
      });

      const percent = `${((total / expensiveTotal) * 100).toFixed(0)}%`;

      if (total > 0) {
        totalCategory.push({
          name: category.name,
          key: category.key,
          color: category.color,
          total,
          percent,
        });
      }
    });

    setTotalCategories(totalCategory);
    setIsLoading(false);
  };

  const handleChangeDate = (action: 'next' | 'previous') => {
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  };

  return (
    <Wrapper>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      {isLoading ? (
        <LoadWrapper>
          <ActivityIndicator size="large" color={colors.secondary} />
        </LoadWrapper>
      ) : (
        <Content showsVerticalScrollIndicator={false}>
          <MonthSelect>
            <MonthSelectButton onPress={() => handleChangeDate('previous')}>
              <SelectIcon name="chevron-left" />
            </MonthSelectButton>

            <Month>{format(selectedDate, 'MMMM yyyy', { locale: ptBR })}</Month>

            <MonthSelectButton onPress={() => handleChangeDate('next')}>
              <SelectIcon name="chevron-right" />
            </MonthSelectButton>
          </MonthSelect>

          <ChartWrapper>
            <VictoryPie
              data={totalCategories}
              x="percent"
              y="total"
              colorScale={totalCategories.map((category) => category.color)}
              style={{
                labels: {
                  fontSize: value(18),
                  fontWeight: 'bold',
                  fill: colors.shape,
                },
              }}
              labelRadius={80}
            />
          </ChartWrapper>
          {totalCategories.map((category) => (
            <HistoryCard
              key={category.key}
              title={category.name}
              amount={currencyFormatter(category.total)}
              color={category.color}
            />
          ))}
        </Content>
      )}
    </Wrapper>
  );
};
