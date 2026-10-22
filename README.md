# Teste Front-End

Vitrine de produtos desenvolvida em **React + TypeScript** com **Sass (SCSS)** e **sem bibliotecas de UI**.

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — dev server e build
- [Sass](https://sass-lang.com/) (SCSS Modules) — estilização sem lib de UI
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) — testes
- [ESLint](https://eslint.org/) (flat config) + [Prettier](https://prettier.io/) — lint e formatação
- [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) + [commitlint](https://commitlint.js.org/) — git hooks e padronização de commits

## Requisitos

- Node.js `>= 22.12` (ver `.nvmrc`)

## Instalação

```bash
npm install
```

## Scripts

| Comando                 | Descrição                                |
| ----------------------- | ---------------------------------------- |
| `npm run dev`           | Sobe o servidor de desenvolvimento       |
| `npm run build`         | Type-check + build de produção (`dist/`) |
| `npm run preview`       | Pré-visualiza o build de produção        |
| `npm run typecheck`     | Só o type-check do TypeScript            |
| `npm run lint`          | ESLint com `--max-warnings=0`            |
| `npm run lint:fix`      | ESLint com correção automática           |
| `npm run format`        | Formata com Prettier                     |
| `npm run format:check`  | Checa formatação (modo CI)               |
| `npm test`              | Roda os testes uma vez                   |
| `npm run test:watch`    | Testes em watch mode                     |
| `npm run test:coverage` | Testes com relatório de cobertura        |

## Estrutura

```
src/
├── components/
│   └── button/
│       ├── button.component.tsx    # Componente
│       └── button.module.scss      # Estilo do componente (na mesma pasta)
├── styles/
│   ├── abstracts/                  # Variáveis e mixins (injetados automaticamente)
│   ├── base/                       # Reset e tipografia
│   └── main.scss                   # Entrypoint global de estilos
├── app.component.tsx
└── main.tsx

tests/                              # Todos os testes ficam fora de src/
├── setup.ts                        # Setup global do Vitest
└── unit/
    └── components/                 # Espelha src/components/
        ├── app.test.tsx
        └── button/
            └── button.test.tsx
```

### Convenções

- **Nomes**: todas as pastas e arquivos usam `snake_case` (tanto em `src` quanto em `tests`).
- **Componentes**: pasta `snake_case` com o nome do componente contendo `<nome>.component.tsx` e o style na
  mesma pasta (`<nome>.module.scss`).
- **Testes**: ficam em `tests/` (fora do `src`), em `tests/unit/`, espelhando a estrutura de `src` com os
  mesmos nomes de arquivo (`<nome>.test.tsx`).

### Alias e SCSS

- Alias `@/*` -> `src/*` (configure em `vite.config.ts` + `tsconfig.app.json`).
- Variáveis e mixins de `src/styles/abstracts` são injetados automaticamente em **todo** arquivo `.scss`
  via `css.preprocessorOptions.scss.additionalData`, não sendo necessário importá-los manualmente.
- Estilos de componentes usam **CSS/SCSS Modules** (`*.module.scss`).

## Git hooks

- **pre-commit**: roda `lint-staged` (ESLint `--fix` + Prettier nos arquivos staged).
- **commit-msg**: valida a mensagem via commitlint (padrão [Conventional Commits](https://www.conventionalcommits.org/)).
- **pre-push**: roda `typecheck` e os testes.

### Padrão de commits

```
<tipo>(escopo opcional): descrição

feat: adiciona vitrine de produtos
fix(modal): corrige fechamento ao clicar fora
chore: configura husky e commitlint
```

Tipos aceitos: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`.
