# 💜 Lacrei Saúde — Desafio Técnico Front-end

Desafio técnico de voluntariado front-end para a Lacrei Saúde, seguindo o Marsha Design System (Figma).

> ⚠️ **Status: em desenvolvimento.** Este README documenta o progresso real do projeto, incluindo o que ainda está pendente.

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


## 📊 Progresso atual

### ✅ Concluído

- Setup do projeto (Next.js + TypeScript + Styled-Components)
- Registry SSR do Styled-Components configurado
- Alias `@/*` corrigido no `tsconfig.json` (apontando para `./src/*`)
- Mock de API com MSW configurado (bônus)
- Componentes `WelcomeHero`, `InfoCard` e `Tag` criados
- Página inicial (`src/app/page.tsx`) montada com Hero + 2 cards informativos, baseada no Guia de Estilo Marsha P. Johnson (Figma)

### 🚧 Pendente

- [ ] Confirmar cores e tipografia exatas do Design System (atualmente estimadas por print — acesso ao Figma restrito, ver observação abaixo)
- [ ] `theme.ts` com os tokens do Design System (cores, tipografia, espaçamento)
- [ ] Header e Footer reutilizáveis
- [ ] Segunda rota/página
- [ ] 3 botões interativos com ações reais
- [ ] Responsividade validada em pelo menos 3 breakpoints
- [ ] Testes unitários (mínimo 3)
- [ ] Validação de acessibilidade (Lighthouse ≥ 90)
- [ ] Validação de performance (Lighthouse ≥ 80)
- [ ] Deploy público
- [ ] Documentação de rollback

## 🔒 Observação sobre acesso ao Design System

O arquivo do Figma foi disponibilizado em modo somente leitura (view-only), o que limitou a extração de assets e valores exatos de estilo (cores, tipografia) em alguns blocos. Onde não foi possível confirmar o valor exato, uma estimativa visual foi aplicada e está marcada como pendente de ajuste no código-fonte.

## ↩️ Rollback

<!-- TODO: documentar processo de rollback (ex: como reverter para a última versão estável em produção) -->

## 🌐 Deploy

<!-- TODO: link do deploy público -->

## 👤 Autor

Douglas — [GitHub](#) · [LinkedIn](#)
