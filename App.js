import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTodo from "./src/components/AddTodo";
import TodoList from "./src/components/TodoList";
import EditTodo from "./src/components/EditTodo";
import DeleteTodo from "./src/components/DeleteTodo";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Screen name={"AddTodo"} component={AddTodo} />
        <Stack.Screen name={"TodoList"} component={TodoList} />
        <Stack.Screen name={"EditTodo"} component={EditTodo} />
        <Stack.Screen name={"DeleteTodo"} component={DeleteTodo} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
