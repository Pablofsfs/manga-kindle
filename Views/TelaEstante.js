import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { useManga } from '../MangaContext.js';
import { useTheme } from '@react-navigation/native';

// Componente MangaItem
const MangaItem = ({ item, onPress, onRemove }) => {
  const { colors } = useTheme(); // Pega o tema

  return (
    <View style={styles.itemWrapper}>
      <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
        <Image style={styles.cover} source={{ uri: item.coverUrl }} />
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.author} numberOfLines={1}>{item.author}</Text>
      </TouchableOpacity>
      <Button title="Remover" color="red" onPress={onRemove} />
    </View>
  );
};

export default function TelaEstante({ navigation }) {
  const { allManga, libraryMangaIds, removeFromLibrary } = useManga();
  const { colors } = useTheme();
  
  const myLibrary = allManga.filter(manga => libraryMangaIds.includes(manga.id));

  const renderItem = ({ item }) => (
    <MangaItem
      item={item}
      onPress={() => navigation.navigate('DetalhesManga', { manga: item })}
      onRemove={() => removeFromLibrary(item.id)}
    />
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {myLibrary.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, { color: colors.text }]}>Sua estante está vazia.</Text>
          <Text style={styles.emptySubText}>Visite a Loja para adicionar mangás!</Text>
        </View>
      ) : (
        <FlatList
          data={myLibrary}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2} 
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 10 },
  itemWrapper: { flex: 1, margin: 8, maxWidth: '46%' },
  itemContainer: { alignItems: 'center' },
  cover: { width: 150, height: 220, borderRadius: 8, marginBottom: 8, backgroundColor: '#eee' },
  title: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  author: { fontSize: 14, color: 'gray', marginBottom: 5 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  emptyText: { fontSize: 20, fontWeight: 'bold' },
  emptySubText: { fontSize: 16, color: 'gray', marginTop: 10 },
});