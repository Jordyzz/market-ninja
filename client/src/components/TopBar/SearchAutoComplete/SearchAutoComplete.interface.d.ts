export interface SearchACProps {
  fetchOptions: (input: string) => Promise<any>;
  onOptionClick: (value: string) => void;
}
