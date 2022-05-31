import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { Platform } from 'react-native';
import { Resume } from '../screens/Resume';

export type AppRoutesParamList = {
  dashboard: undefined;
  register: undefined;
  resume: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutesParamList {}
  }
}

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => {
  const { colors } = useTheme();
  return (
    <Navigator
      initialRouteName="dashboard"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <Screen
        name="dashboard"
        component={Dashboard}
        options={{
          title: 'Listagem',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              size={size}
              color={color}
              name="format-list-bulleted"
            />
          ),
        }}
      />

      <Screen
        name="register"
        component={Register}
        options={{
          title: 'Cadastrar',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="attach-money" />
          ),
        }}
      />

      <Screen
        name="resume"
        component={Resume}
        options={{
          title: 'Resumo',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              size={size}
              color={color}
              name="pie-chart-outlined"
            />
          ),
        }}
      />
    </Navigator>
  );
};
