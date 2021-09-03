export interface OptionType {
  label: string;
  value: string;
  icon?: string;
}
export interface SelectProps {
  title: string;
  options: OptionType[];
  selected?: OptionType;
  onSelect: (option: OptionType) => void;
}
