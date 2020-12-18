
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import Header from './cmps/Header'
import TodoItem from './cmps/TodoItem'
import AddTodo from './cmps/AddTodo'
import SandBox from './cmps/SandBox'
export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffe', key: '1' },
    { text: 'learn native', key: '2' },
    { text: 'eat  some shit', key: '3' },
    { text: 'drink water', key: '5' },
    { text: 'hi here', key: '4' },
    { text: 'more to do', key: '6' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo => todo.key !== key))
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [...prevTodos, { text, key: Math.random().toString() }]
      })
    } else {
      console.log('elses');
      Alert.alert('oops', 'need at least 4 chars', [
        { text: 'understod', onPress: () => console.log('alertt closed') }
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem pressHandler={pressHandler} item={item} />
              )}
            />
          </View>
          <AddTodo submitHandler={submitHandler} />
        </View>
      </View>


    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex: 1,
    marginTop: 20
  }


});
