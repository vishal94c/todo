import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';

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

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevToDos) => {
        return [
          { text: text, id: Math.random().toString() },
          ...prevToDos, //... is a spread operator
        ];
      });
    } else {
      Alert.alert('Error', 'Must be over 3 characters long', [
        {
          text: 'OK',
          onPress: () => console.log('alert closed'),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('keyboard closed');
      }}
    >
      <View style={styles.container}>
        {/*Header */}
        <Header />
        <View style={styles.content}>
          {/*to form */}
          <AddToDo submitHandler={submitHandler} />
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
