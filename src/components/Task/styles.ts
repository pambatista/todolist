import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: "#262626",
    borderRadius: 8,
    borderColor: "#333333",
    borderWidth: 1,
    marginTop: 8,
  },

  taskText: {
    width: "80%",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    marginHorizontal: 8,
    color: "#F2F2F2",
  },
  taskTextDone: {
    width: "80%",
    fontWeight: "400",
    textDecorationLine: "line-through",
    fontSize: 14,
    lineHeight: 20,
    marginHorizontal: 8,
    color: "#808080",
  },
  buttonDeleteTask: {
    width: 32,
  },
});
