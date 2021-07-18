import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([
    { id: 1, task: "to shop", completed: true },
    { id: 2, task: "to play", completed: true },
  ]);
  const handleAddTask = () => {
    console.log(task);
    const newTodo={
      id:Math.random(),
      task:task,
      completed:false
    }
    setTaskItems([...taskItems,newTodo]);
    setTask(null);
    // Keyboard.dismiss();
    // setTaskItems([...taskItems, task]);
    // setTask(null);
  };
  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    // setTaskItems(taskItems.filter(todo => todo.index !== index));
  };
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <View style={styles.item}>
                <View style={styles.itemLeft}>
                  <View style={styles.square}></View>
                </View>
                <Text key={index} style={styles.itemText}>
                  {item.task}
                </Text>

                <Icon
                  name="delete"
                  size={25}
                  color="red"
                  onPress={(index) => deleteTask()}
                />
              </View>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behaviour={Platform.os === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.Input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        ></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addwrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1eff0",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f5fcfc",
    width: 250,
    borderRadius: 60,
    borderColor: "#c6ccc9",
    borderWidth: 1,
  },
  addwrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#f5fcfc",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c6ccc9",
    borderWidth: 1,
  },
  item: {
    backgroundColor: "#f5fcfc",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#41b5b5",
    opacity: 0.6,
    borderRadius: 5,
  },
  itemText: {
    maxWidth: "80%",
  },
  
});
