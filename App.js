import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'vishal', id: '1' },
    { name: 'thanos', id: '2' },
    { name: 'pinky', id: '3' },
    { name: 'katie', id: '4' },
    { name: 'cathrine', id: '5' },
    { name: 'random', id: '6' },
    { name: 'mouse', id: '7' },
    { name: 'keyboards', id: '8' },
  ]);

  const PressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((people) => people.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(Item) => Item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => PressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 20,
    backgroundColor: 'pink',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
});
