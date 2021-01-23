import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TodoList = props => {
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity>
        <Icon 
          name={props.checked ? 'check' : 'square'}
          size={25} 
          color='black' 
          style={{ marginLeft: 15 }} 
          onPress={props.setChecked}
        />
      </TouchableOpacity>
      <View>
        {props.checked && <View style={styles.verticalLine} />}
        <Text style={styles.listItem}>{props.text}</Text>
      </View>
      <TouchableOpacity>
        <Icon
          name='trash-2'
          size={25}
          color='#AA4A4A'
          style={styles.trash}
          onPress={props.deleteTodo}
        />
      </TouchableOpacity>
    </View>
  );
}

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: '#aaaaaa',
    borderBottomWidth: 1.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40
  },
  listItem: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: '#275943',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff'
  },
  verticalLine: {
    borderBottomColor: '#275943',
    borderBottomWidth: 2,
    marginLeft: 10,
    width: '100%',
    position: 'absolute',
    zIndex: 99,
    marginTop: 15,
    fontWeight: 'bold'
  },
  trash: {
    paddingLeft: '20%'
  }
});