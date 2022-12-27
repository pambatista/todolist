import { View, Image, Text } from "react-native";

import { styles } from "./styles";

import Clipboard from "../../../assets/Clipboard.png";

export default function ListEmpty() {
  return (
    <View style={styles.emptyList}>
      <Image source={Clipboard} style={styles.emptyListImage} />
      <Text style={styles.emptyListTextBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.emptyListTextNormal}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
