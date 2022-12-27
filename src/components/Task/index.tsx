import { View, Text, TouchableOpacity } from "react-native";
import { Trash2 } from "react-native-feather";

import Checkbox from "../Checkbox";
import { styles } from "./styles";

type TaskProps = {
  task: {
    text: string;
    done: boolean;
  };
  doneTask: () => void;
  deleteTask: () => void;
};

export default function Task({ task, doneTask, deleteTask }: TaskProps) {
  return (
    <View style={styles.task}>
      <Checkbox check={task.done} click={doneTask} />
      {task.done ? (
        <Text style={styles.taskTextDone}>{task.text}</Text>
      ) : (
        <Text style={styles.taskText}>{task.text}</Text>
      )}
      <TouchableOpacity style={styles.buttonDeleteTask} onPress={deleteTask}>
        <Trash2 stroke="#808080" width="18" />
      </TouchableOpacity>
    </View>
  );
}
