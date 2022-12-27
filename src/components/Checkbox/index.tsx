import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Check } from "react-native-feather";

type CheckboxProps = {
  check: boolean;
  click: () => void;
};
export default function Checkbox({ check, click }: CheckboxProps) {
  if (!check) {
    return (
      <TouchableOpacity
        style={styles.checkbox}
        onPress={click}
      ></TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={styles.checkboxSelect} onPress={click}>
        <Check stroke="#fff" width="14" />
      </TouchableOpacity>
    );
  }
}
