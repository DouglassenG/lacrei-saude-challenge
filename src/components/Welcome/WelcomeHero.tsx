import { Tag } from "./Tag";
import { HeroWrapper, HeroTitle } from "./WelcomeHero.styles";

interface WelcomeHeroProps {
  tagLabel: string;
  title: string;
}

export function WelcomeHero({ tagLabel, title }: WelcomeHeroProps) {
  return (
    <HeroWrapper>
      <Tag label={tagLabel} />
      <HeroTitle>{title}</HeroTitle>
    </HeroWrapper>
  );
}