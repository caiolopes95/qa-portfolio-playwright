# Portfólio de Automação de Testes | Playwright + TypeScript

Projeto de automação de testes funcionais e end-to-end (E2E) desenvolvido com **Playwright e TypeScript**, utilizando a aplicação de e-commerce [SauceDemo](https://www.saucedemo.com/).

O projeto cobre os principais fluxos da aplicação, desde a autenticação até a finalização de uma compra. Além dos testes, implementei uma estrutura baseada em Page Object Model (POM), gerenciamento de dados com fixtures, relatórios de execução e integração contínua com GitHub Actions.

## Visão geral

A proposta foi construir uma suíte de automação organizada e de fácil manutenção, indo além da criação de scripts isolados. Os cenários estão separados por funcionalidade, com ações reutilizáveis nas páginas e validações nos próprios testes.

Atualmente, o projeto possui **32 cenários automatizados**, que podem ser executados em **Chromium, Firefox e WebKit**, totalizando **96 execuções** em uma rodada completa de testes cross-browser.

## Tecnologias e ferramentas

| Tecnologia | Utilização |
| --- | --- |
| Playwright | Automação e execução dos testes |
| TypeScript | Desenvolvimento dos testes e Page Objects |
| Node.js / npm | Ambiente e gerenciamento de dependências |
| Page Object Model (POM) | Organização dos elementos e ações das páginas |
| JSON Fixtures | Armazenamento dos dados de teste |
| Git / GitHub | Versionamento do código |
| GitHub Actions | Integração contínua e execução automatizada |
| HTML Reporter | Relatório visual das execuções |
| JUnit Reporter | Resultados em XML para integração com CI |

## Cobertura de testes

| Módulo | Cenários | Escopo |
| --- | ---: | --- |
| Login | 7 | Autenticação válida e cenários negativos |
| Produtos | 7 | Catálogo e informações dos produtos |
| Carrinho | 7 | Operações e validações do carrinho |
| Checkout | 10 | Etapas da compra e validação de campos |
| Fluxo de compra E2E | 1 | Jornada completa de compra |
| **Total** | **32** | |

O cenário E2E percorre o fluxo de autenticação, seleção de produto, carrinho e finalização da compra.

## Estrutura do projeto

```text
qa-portfolio-playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── docs/
├── fixtures/
│   ├── checkoutData.json
│   └── loginData.json
├── pages/
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── LoginPage.ts
│   └── ProductsPage.ts
├── tests/
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   ├── login.spec.ts
│   ├── products.spec.ts
│   └── purchase-flow.spec.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

### Page Object Model (POM)

Os arquivos em `pages/` concentram os localizadores e métodos que representam as interações com a aplicação. Já os arquivos em `tests/` definem os cenários e realizam as validações com asserções do Playwright.

Essa separação evita duplicação de código e facilita a manutenção dos testes quando algum elemento da interface muda.

### Dados de teste

Os dados utilizados nos cenários de login e checkout ficam em arquivos JSON na pasta `fixtures/`. Dessa forma, os testes podem reutilizar diferentes conjuntos de dados sem espalhar valores diretamente pelo código.

## Como executar o projeto

### Pré-requisitos

- Node.js e npm instalados
- Git instalado

### Instalação

Clone o repositório:

```bash
git clone https://github.com/caiolopes95/qa-portfolio-playwright.git
cd qa-portfolio-playwright
```

Instale as dependências:

```bash
npm ci
```

Instale os navegadores utilizados pelo Playwright:

```bash
npx playwright install
```

### Executar todos os testes

```bash
npx playwright test
```

### Executar por navegador

```bash
# Chromium
npx playwright test --project=chromium

# Firefox
npx playwright test --project=firefox

# WebKit
npx playwright test --project=webkit
```

### Executar um arquivo específico

```bash
npx playwright test tests/login.spec.ts
```

### Executar com o navegador visível

```bash
npx playwright test --headed
```

## Testes cross-browser

A suíte está configurada para executar nos três motores de navegador disponíveis no Playwright:

- **Chromium:** motor utilizado por navegadores baseados no Chrome.
- **Firefox:** motor do navegador Mozilla Firefox.
- **WebKit:** motor utilizado pelo Safari.

Com os 32 cenários executados em cada navegador, a suíte completa realiza **96 execuções**. Isso permite observar diferenças de comportamento entre os navegadores e ampliar a cobertura da automação.

## Integração contínua com GitHub Actions

O projeto possui uma pipeline configurada em `.github/workflows/playwright.yml`.

Ela é acionada automaticamente em:

- `push` na branch `main`;
- `pull_request` direcionado à branch `main`;
- execução manual pelo GitHub Actions (`workflow_dispatch`).

### Etapas da pipeline

1. Checkout do repositório.
2. Configuração do Node.js.
3. Instalação das dependências com `npm ci`.
4. Instalação do navegador e das dependências de sistema necessárias.
5. Execução dos testes automatizados.
6. Publicação dos relatórios HTML e JUnit como artifacts.

### Paralelização por navegador

Utilizei a estratégia **Matrix** do GitHub Actions para separar a execução em três jobs independentes:

| Job | Navegador | Cenários |
| --- | --- | ---: |
| Tests - chromium | Chromium | 32 |
| Tests - firefox | Firefox | 32 |
| Tests - webkit | WebKit | 32 |

Cada job executa os testes do seu navegador e publica os respectivos relatórios. A configuração `fail-fast: false` permite que os demais jobs continuem mesmo que um deles apresente falha.

### Resultado da otimização

Na comparação entre duas execuções do GitHub Actions, observei a seguinte diferença:

| Configuração | Tempo total |
| --- | ---: |
| Cross-browser em um único job | 2min 56s |
| Cross-browser com Matrix | 1min 32s |

A redução observada foi de **aproximadamente 47,7%** (1min 24s). Esses tempos são referentes às execuções comparadas e podem variar conforme a disponibilidade dos runners e o tempo de resposta da aplicação.

[Consultar as execuções no GitHub Actions](https://github.com/caiolopes95/qa-portfolio-playwright/actions)

## Relatórios de execução

O projeto gera relatórios em dois formatos:

**HTML:** permite consultar o resultado dos testes, tempos de execução e detalhes das falhas.

**JUnit (XML):** disponibiliza os resultados em um formato utilizado por ferramentas de integração contínua.

A configuração dos reporters no `playwright.config.ts` é:

```typescript
reporter: [
  ['list'],
  ['html', {
    outputFolder: 'playwright-report',
    open: 'never'
  }],
  ['junit', {
    outputFile: 'test-results/results.xml'
  }]
],
```

Para abrir o relatório HTML localmente:

```bash
npx playwright show-report
```

No GitHub Actions, cada job publica seus relatórios HTML e JUnit separadamente, permitindo consultar os resultados por navegador.

## Configurações de execução

O arquivo `playwright.config.ts` inclui:

- Execução paralela habilitada localmente.
- Um worker por job no ambiente de CI.
- Até duas novas tentativas para testes que falharem no CI.
- Bloqueio de `test.only` durante a execução no CI.
- Retenção de traces e captura de screenshots em caso de falha.

A paralelização entre navegadores acontece pela Matrix do GitHub Actions, enquanto cada job executa seus testes com um worker.

## Evolução do portfólio

Este projeto dá continuidade ao meu trabalho anterior de automação com **Cypress e JavaScript**, também desenvolvido sobre o SauceDemo.

Na primeira versão, trabalhei com planejamento e documentação de testes, automação funcional e integração contínua. Nesta versão, utilizei **Playwright e TypeScript** para aprofundar a prática com outro framework, estruturar a suíte com POM e explorar execução cross-browser e otimização de CI/CD.

A intenção foi percorrer o processo completo: organização dos cenários, implementação, execução, análise dos resultados e integração com a pipeline.

## Autor

**Caio Lopes Pereira**  
Analista de Qualidade (QA) | Automação de Testes

- [LinkedIn](https://www.linkedin.com/in/caiolopespereira/)
- [GitHub](https://github.com/caiolopes95)
- [Portfólio Cypress + JavaScript](https://github.com/caiolopes95/qa-portfolio)
