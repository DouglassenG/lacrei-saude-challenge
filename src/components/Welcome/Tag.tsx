import { TagText } from "./Tag.styles";

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return <TagText>{label}</TagText>;
}