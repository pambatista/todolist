import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import { PlusCircle } from "react-native-feather";

import { styles } from "./styles";

import Logo from "../../../assets/Logo.svg";

import Task from "../../components/Task";
import ListEmpty from "../../components/ListEmpty";

type Task = {
  id: number;
  text: string;
  done: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [task, setTask] = useState<string>("");

  function handleAddTask() {
    if (!task) {
      return Alert.alert("Atenção", "digite o texto da tarefa no input!");
    }

    setTasks((prevState) => [
      ...prevState,
      {
        id: tasks.length + 1,
        done: false,
        text: task,
      },
    ]);

    setTask("");
  }

  function handleDoneTask(task) {
    setTasks((prevState) =>
      prevState.map((item) => {
        if (item.id === task.id) {
          item.done = !item.done;
        }
        return item;
      })
    );
  }

  function handleDeleteTask(task) {
    setTasks((prevState) =>
      prevState.filter((item) => {
        if (item.id !== task.id) {
          return item;
        }
      })
    );
  }

  function filterTaskDones() {
    return tasks.filter((task) => {
      return task.done;
    }).length;
  }

  function filterTasksCreated() {
    return tasks.length;
  }

  return (
    <View style={styles.container}>
      <View style={styles.Headers}>
        <Logo width={120} height={40} />
      </View>
      <View>
        <View style={styles.contentInput}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTask}
            value={task}
          />
          <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
            <PlusCircle stroke="#fff" width="16" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentHeaders}>
        <View style={styles.statusHeaders}>
          <Text style={styles.taskCreated}>Criadas</Text>
          <View style={styles.taskCounter}>
            <Text style={styles.taskCounterText}>{filterTasksCreated()}</Text>
          </View>
        </View>
        <View style={styles.statusHeaders}>
          <Text style={styles.taskDone}>Concluídas</Text>
          <View style={styles.taskCounter}>
            <Text style={styles.taskCounterText}>{filterTaskDones()}</Text>
          </View>
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item) => item.text}
        renderItem={({ item }) => (
          <Task
            task={item}
            doneTask={() => handleDoneTask(item)}
            deleteTask={() => handleDeleteTask(item)}
          />
        )}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </View>
  );
}
