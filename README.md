# 💜 Lacrei Saúde — Desafio Técnico Front-end

Desafio técnico de voluntariado front-end para a Lacrei Saúde, seguindo o Marsha Design System (Figma).

> ⚠️ **Status: em desenvolvimento.**

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/) (com SSR Registry)
- [MSW (Mock Service Worker)](https://mswjs.io/) — mock de API (bônus)

## 🚀 Como rodar localmente

```powershell
git clone <url-do-repositorio>
cd lacrei-saude-challenge
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## 📁 Estrutura de pastas

```
lacrei-saude-challenge/
├── src/
│ ├── app/
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── components/
│ │ └── Welcome/
│ │ ├── WelcomeHero.tsx
│ │ ├── WelcomeHero.styles.ts
│ │ ├── InfoCard.tsx
│ │ ├── InfoCard.styles.ts
│ │ ├── Tag.tsx
│ │ └── Tag.styles.ts
│ └── mocks/
│ ├── data.json
│ ├── handlers.ts
│ └── browser.ts
├── public/
├── tsconfig.json
└── README.md
```



## 📊 Progresso atual

### ✅ Concluído

- Setup do projeto (Next.js + TypeScript + Styled-Components)
- Registry SSR do Styled-Components configurado
- Alias `@/*` corrigido no `tsconfig.json` (apontando para `./src/*`)
- Mock de API com MSW configurado (bônus)
- Componentes `WelcomeHero`, `InfoCard` e `Tag` criados
- Página inicial (`src/app/page.tsx`) montada com Hero + 2 cards informativos, baseada no Guia de Estilo Marsha P. Johnson (Figma)

## 🔒 Observação sobre acesso ao Design System

O arquivo do Figma foi disponibilizado em modo somente leitura (view-only), o que limitou a extração de assets e valores exatos de estilo (cores, tipografia) em alguns blocos. Onde não foi possível confirmar o valor exato, uma estimativa visual foi aplicada e está marcada como pendente de ajuste no código-fonte.

## 👤 Autor

Douglas — [GitHub](#) · [LinkedIn](#)
