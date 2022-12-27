import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  Headers: {
    position: "absolute",
    height: 170,
    right: 0,
    left: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#0D0D0D",
  },
  contentInput: {
    flexDirection: "row",
    marginTop: 140,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    height: 54,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,

    color: "#F2F2F2",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
  },

  buttonAdd: {
    width: 54,
    height: 54,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  contentHeaders: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 24,
  },
  statusHeaders: {
    flexDirection: "row",
  },
  taskCreated: {
    color: "#4EA8DE",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 17,
  },
  taskDone: {
    color: "#8284FA",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 17,
  },
  taskCounter: {
    width: 25,
    height: 19,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333",
    borderRadius: 999,
    marginLeft: 8,
  },
  taskCounterText: {
    color: "#D9D9D9",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 15,
  },
});
