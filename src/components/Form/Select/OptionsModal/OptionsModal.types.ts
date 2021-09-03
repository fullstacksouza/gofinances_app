import { OptionType } from "../Select.types";

export interface OptionsModalProps {
  visible: boolean;
  options: OptionType[];
  title: string;
  onSelectOption: (option?: OptionType) => void;
}
