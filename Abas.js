import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native'; 

import EstanteStack from './EstanteStack.js';
import TelaLoja from './Views/TelaLoja.js';

const Tab = createBottomTabNavigator();

export default function Abas() {
  const { colors } = useTheme(); 

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Estante') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Loja') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary, 
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: colors.card },
        headerShown: false, 
      })}
    >
      <Tab.Screen name="Estante" component={EstanteStack} />
      <Tab.Screen 
        name="Loja" 
        component={TelaLoja} 
        options={{ 
          headerShown: true,
          headerStyle: { backgroundColor: colors.card },
          headerTintColor: colors.text,
        }} 
      /> 
    </Tab.Navigator>
  );
}