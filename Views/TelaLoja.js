import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { useManga } from '../MangaContext.js';
import { useTheme } from '@react-navigation/native';

// Componente MangaStoreItem
const MangaStoreItem = ({ item, onPress, onAdd, inLibrary }) => {
  const { colors, dark } = useTheme(); // dark é um booleano (true/false)

  const tagStyle = {
    backgroundColor: dark ? '#006422' : '#E0F2E9',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  };
  
  const tagTextStyle = {
    color: dark ? '#E0F2E9' : '#006422',
    fontWeight: 'bold',
  };

  return (
    <View style={[styles.itemContainer, { backgroundColor: colors.card, shadowColor: colors.text }]}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.cover} source={{ uri: item.coverUrl }} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.author} numberOfLines={1}>{item.author}</Text>
        
        {inLibrary ? (
          <View style={tagStyle}>
            <Text style={tagTextStyle}>Na sua estante</Text>
          </View>
        ) : (
          <Button title="Adicionar" onPress={onAdd} />
        )}
      </View>
    </View>
  );
};

export default function TelaLoja({ navigation }) {
  const { allManga, libraryMangaIds, addToLibrary } = useManga();
  const { colors } = useTheme();

  const renderItem = ({ item }) => {
    const isInLibrary = libraryMangaIds.includes(item.id);

    return (
      <MangaStoreItem
        item={item}
        onPress={() => navigation.navigate('Estante', { 
          screen: 'DetalhesManga', 
          params: { manga: item } 
        })}
        onAdd={() => addToLibrary(item.id)}
        inLibrary={isInLibrary}
      />
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={allManga}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.4,
  },
  cover: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: '#eee',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 15,
  },
});