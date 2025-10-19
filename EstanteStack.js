import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import TelaEstante from './Views/TelaEstante.js';
import TelaDetalhesManga from './Views/TelaDetalhesManga.js';

const Stack = createNativeStackNavigator();

export default function EstanteStack() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTintColor: colors.text,
      }}
    >
      <Stack.Screen name="Minha Estante" component={TelaEstante} />
      <Stack.Screen 
        name="DetalhesManga" 
        component={TelaDetalhesManga} 
        options={({ route }) => ({ title: route.params.manga.title })}
      />
    </Stack.Navigator>
  );
}