import { ReactNode } from "react";
import { Tag } from "./Tag";
import {
  CardWrapper,
  CardHeader,
  CardTitle,
  CardBody,
} from "./InfoCard.styles";

interface InfoCardProps {
  tagLabel: string;
  title: string;
  headerColor: string;
  maxWidth?: string;
  children: ReactNode;
}

export function InfoCard({
  tagLabel,
  title,
  headerColor,
  maxWidth,
  children,
}: InfoCardProps) {
  return (
    <CardWrapper $maxWidth={maxWidth}>
      <Tag label={tagLabel} />
      <CardHeader $bg={headerColor}>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </CardWrapper>
  );
}