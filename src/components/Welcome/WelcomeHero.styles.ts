import styled from "styled-components";

export const HeroWrapper = styled.div`
  max-width: 3030px;
  width: 100%;
  height: 384px;
  border-radius: 4px;
  padding: 48px 36px;
  background: linear-gradient(105.43deg, #018383 14.39%, #014687 84.69%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

// TODO: confirmar tamanho/peso exato do título do Hero
export const HeroTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
`;