import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { useManga } from '../MangaContext.js';
import { useTheme } from '@react-navigation/native';

export default function TelaDetalhesManga({ route, navigation }) {
  const { manga } = route.params;
  const { libraryMangaIds, addToLibrary, removeFromLibrary } = useManga();
  const { colors } = useTheme();
  const isInLibrary = libraryMangaIds.includes(manga.id);

  // Atualiza o título da tela (no header)
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: manga.title });
  }, [navigation, manga]);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}> 
      <View style={styles.content}>
        <Image 
          style={styles.cover} 
          source={{ uri: manga.coverUrl }} 
        />
        <Text style={[styles.title, { color: colors.text }]}>{manga.title}</Text>
        <Text style={styles.author}>por {manga.author}</Text>
        
        <View style={styles.buttonContainer}>
          <Button title="Ler (Simulação)" onPress={() => alert(`Iniciando leitura de ${manga.title}!`)} />
          
          {isInLibrary ? (
            <Button 
              title="Remover da Estante" 
              onPress={() => removeFromLibrary(manga.id)} 
              color="red" 
            />
          ) : (
            <Button 
              title="Adicionar à Estante" 
              onPress={() => addToLibrary(manga.id)} 
              color="#007AFF"
            />
          )}
        </View>

        <Text style={[styles.synopsisHeader, { color: colors.text }]}>Sinopse</Text>
        <Text style={[styles.synopsisText, { color: colors.text }]}>
          {manga.synopsis}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { alignItems: 'center', padding: 20 },
  cover: { width: 200, height: 300, borderRadius: 10, marginBottom: 20, backgroundColor: '#eee' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 },
  author: { fontSize: 18, color: 'gray', marginBottom: 20 },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 25,
  },
  synopsisHeader: { fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 10 },
  synopsisText: { fontSize: 16, lineHeight: 24 },
});