import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView
} from 'react-native';

import TodoItem from './TodoItem';

const temporaryTodos = [{
  id: "1",
  text: "Hello"
},{
  id: "2",
  text: "World"
}];

class Main extends React.Component {

  render(){
    return (
      <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
        <View style={styles.topbar}>
          <Text style={styles.title}>{'Hello World'}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}/>
        </View>
        <ScrollView automaticallyAdjustContentInsets={false}>
          {this.renderTodos()}
        </ScrollView>
      </View>
    );
  };

  renderTodos(){
    return temporaryTodos.map((todo) => {
      return (
        <TodoItem text={todo.text} key={todo.id} id={todo.id}/>
      )
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  topbar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc77'
  },
  title: {
    color: 'white',
    fontSize: 20
  },
  inputContainer: {
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc77'
  },
  input: {
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  }
});

export default Main;
