import { TouchableOpacityProps } from "react-native";

export interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: "C" | "D";
  selected: boolean;
}
