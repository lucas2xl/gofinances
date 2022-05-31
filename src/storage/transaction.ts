import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ITransaction {
  name: string;
  amount: number;
  category: string;
  type: 'up' | 'down';
  date: Date;
  id: number;
}

export const transaction = {
  save: async (data: ITransaction, user_id: string) => {
    const dataKey = `@gofinance:transactions_user:${user_id}`;
    const transactions = await transaction.get(user_id);
    const newData = [...transactions, data];

    await AsyncStorage.setItem(dataKey, JSON.stringify(newData));
  },

  get: async (user_id: string) => {
    const dataKey = `@gofinance:transactions_user:${user_id}`;
    const transactions = await AsyncStorage.getItem(dataKey);
    console.log({ transactions });
    if (transactions) {
      return JSON.parse(transactions);
    }
    return [];
  },

  removeAll: async (user_id: string) => {
    const dataKey = `@gofinance:transactions_user:${user_id}`;
    await AsyncStorage.removeItem(dataKey);
  },
};
