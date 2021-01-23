import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import TodoList from './TodoList';

export default function App() {
   const [value, setValue] = useState('');
   const [todos, setTodos] = useState([]);

   const addTodo = () => {
     if (value.length > 0) {
       setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
       setValue('');
     }
   };

   const checkTodo = id => {
     setTodos(
       todos.map(todo => {
         if (todo.key === id) todo.checked = !todo.checked;
         return todo;
       })
     );
   };

   const deleteTodo = id => {
     setTodos(
       todos.filter(todo => {
         if (todo.key !== id) return true;
       })
     );
   };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="What do you want to do today?"
          placeholderTextColor="#abbabb"
          value={value}
          onChangeText={value => setValue(value)}
        />
        <TouchableOpacity onPress={() => addTodo()}>
          <Icon name='plus' size={30} color='#275943' style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: '90%' }}>
        {todos.map(item => (
          <TodoList 
            text={item.text} 
            key={item.key}
            checked={item.checked}
            setChecked={() => checkTodo(item.key)}
            deleteTodo={() => deleteTodo(item.key)}
          />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#DBDCDE'
  },
  header: {
    marginTop: '15%',
    width: '100%',
    fontSize: 25,
    color: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#275943',
    textAlign: 'center'
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft:10,
    width: '90%'
  },
  textInput: {
    flex: 1,
    height: 20,
    fontSize: 18,
    fontStyle: 'italic',
    color: 'black',
    paddingLeft: 10,
    minHeight: '3%'
  }
});
