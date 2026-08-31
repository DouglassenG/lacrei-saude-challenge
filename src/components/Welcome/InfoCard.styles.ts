import styled from "styled-components";

export const CardWrapper = styled.section<{ $maxWidth?: string }>`
  max-width: ${({ $maxWidth }) => $maxWidth ?? "1543px"};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div<{ $bg: string }>`
  width: 100%;
  min-height: 168px;
  padding: 12px 68px;
  display: flex;
  align-items: center;
  background: ${({ $bg }) => $bg};
`;

// TODO: confirmar tamanho/peso exato do título do card
export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
`;

export const CardBody = styled.div`
  padding: 32px 68px;
  background: #FFFFFF;
  display: flex;
  gap: 24px;
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 320px;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// TODO: confirmar tamanho/peso exato dos subtítulos internos
export const CardSubtitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
`;

// TODO: confirmar tamanho/cor exata do corpo de texto
export const CardParagraph = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #374151;
  margin: 0;
`;