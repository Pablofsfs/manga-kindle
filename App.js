import 'react-native-gesture-handler'; 
import React from 'react';
import { StatusBar, View } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme,
  DarkTheme 
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import Abas from './Abas.js';
import TelaConfig from './Views/TelaConfig.js';
import { MangaProvider, useManga } from './MangaContext.js'; 

const Drawer = createDrawerNavigator();

// Componente interno para ter acesso ao hook useManga()
function AppContent() {
  const { theme } = useManga();
  const isDarkMode = theme === 'dark';

  const navigationTheme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <View style={{ flex: 1, backgroundColor: navigationTheme.colors.background }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={navigationTheme}>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: navigationTheme.colors.card },
            headerTintColor: navigationTheme.colors.text,
            drawerStyle: { backgroundColor: navigationTheme.colors.background },
            drawerActiveTintColor: navigationTheme.colors.primary,
            drawerInactiveTintColor: navigationTheme.colors.text,
          }}
        >
          <Drawer.Screen
            name="Biblioteca"
            component={Abas} 
            options={{
              title: 'Kindle Mangá',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Configurações"
            component={TelaConfig}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="settings-outline" size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

// O App.js agora só "provê" o contexto
export default function App() {
  return (
    <MangaProvider>
      <AppContent />
    </MangaProvider>
  );
}