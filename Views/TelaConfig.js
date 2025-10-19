import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useManga } from '../MangaContext.js';
import { useTheme } from '@react-navigation/native';

export default function TelaConfig() {
  const { theme, toggleTheme } = useManga();
  const { colors } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.row}>
        <Text style={[styles.text, { color: colors.text }]}>Modo Escuro</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});