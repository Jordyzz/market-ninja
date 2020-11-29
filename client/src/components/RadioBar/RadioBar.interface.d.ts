export interface RadioBarProps {
  options: Array<string>;
  selected: string;
  onClick: (option) => void;
}
