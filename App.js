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
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Clean Room', id: '1' },
    { text: 'Drink COffee', id: '2' },
    { text: 'Pastor Nina', id: '3' },
    { text: 'Astro Food', id: '4' },
    { text: 'Sad Song', id: '5' },
  ]);

  const pressHandler = (id) => {
    setTodos((prevToDos) => {
      return prevToDos.filter((todos) => todos.id != id);
    });
  };

  return (
    <View style={styles.container}>
      {/*Header */}
      <Header />
      <View style={styles.content}>
        {/*to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            keyExtractor={(Item) => Item.id}
            renderItem={({ item }) => (
              <ToDoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
