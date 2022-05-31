import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../hooks/auth';

const dataKey = '@gofinance:user';

export const user = {
  save: async (data: IUser) => {
    await AsyncStorage.setItem(dataKey, JSON.stringify(data));
  },

  get: async () => {
    const transactions = await AsyncStorage.getItem(dataKey);
    if (transactions) {
      return JSON.parse(transactions);
    }
    return {};
  },

  remove: async () => {
    await AsyncStorage.removeItem(dataKey);
  },
};
