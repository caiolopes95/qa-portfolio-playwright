# Plano de Testes - SauceDemo

## 1. Objetivo

Este documento descreve o planejamento dos testes para a aplicação SauceDemo, definindo escopo, estratégia, ambiente, critérios de execução e demais informações necessárias para validar os principais fluxos da aplicação.

## Informações do Projeto

**Aplicação:** SauceDemo

**Objetivo do projeto:** Construção de um portfólio de QA Automation.

**Tipo de testes:** Funcionais (manuais e automatizados).

**Framework:** Cypress.

**Linguagem:** JavaScript.

---

## 2. Escopo

O foco deste plano de testes está na validação das funcionalidades críticas para o usuário final, priorizando os fluxos de autenticação, navegação, seleção de produtos, gerenciamento do carrinho e processo de checkout.

Funcionalidades que não fazem parte dos objetivos definidos para este projeto foram explicitamente classificadas como **fora do escopo**.

---

## 3. Funcionalidades em Escopo

As funcionalidades abaixo representam os principais fluxos de negócio da aplicação e serão validadas por meio de testes manuais e automatizados.

- Login
- Logout
- Catálogo de Produtos
- Carrinho de Compras
- Checkout
- Finalização da Compra
- Navegação

---

## 4. Funcionalidades Fora do Escopo

As funcionalidades abaixo não serão contempladas neste ciclo de testes por não fazerem parte dos objetivos definidos para este projeto.

- Testes de Performance
- Testes de Segurança
- Testes de Carga e Stress
- Compatibilidade entre Navegadores
- Responsividade
- Integrações Externas

---

## 5. Estratégia de testes
A estratégia de testes adotada neste projeto consiste na validação progressiva das funcionalidades da aplicação, iniciando pela análise dos requisitos e definição dos cenários de teste, seguida da documentação em BDD, execução manual, registro de defeitos e posterior automação dos cenários críticos utilizando Cypress.

### 5.1 Levantamento dos Cenários
Nesta etapa são identificadas as funcionalidades da aplicação e definidos os cenários que serão validados durante a execução dos testes, priorizando os fluxos críticos do sistema.

**Atividades:**

- Identificação das funcionalidades da aplicação.
- Definição dos cenários de teste.
- Priorização dos fluxos críticos.

---

### 5.2 Especificação dos Cenários (BDD)

Os cenários mais importantes serão documentados em BDD utilizando a sintaxe Gherkin. Esses cenários servirão como apoio para a documentação funcional e para a automação dos testes.

**Atividades:**

- Escrita dos cenários em BDD.
- Definição do comportamento esperado da aplicação.
- Utilização dos cenários como apoio à documentação e à automação dos testes.

---

### 5.3 Testes Manuais

Os casos de teste serão executados manualmente com o objetivo de validar o comportamento da aplicação antes da automação, garantindo que as funcionalidades atendam aos requisitos definidos.

**Atividades:**

- Execução dos casos de teste.
- Registro dos resultados obtidos.
- Identificação e documentação de defeitos.
- Coleta de evidências.

---

### 5.4 Automação dos Testes

Após a validação manual, os cenários priorizados serão automatizados utilizando **Cypress**, permitindo execuções repetitivas, confiáveis e facilitando futuros testes de regressão.

**Atividades:**

- Automação dos fluxos críticos.
- Organização dos testes por funcionalidade.
- Execução dos testes automatizados.

---

### 5.5 Evidências

As evidências geradas durante a execução dos testes serão registradas neste projeto para apoiar a análise dos resultados e dos defeitos encontrados.

**Atividades:**

- Captura de screenshots.
- Registro dos resultados da execução.
- Documentação das evidências relacionadas aos defeitos encontrados.

---

## 6. Ambiente de Testes

Os testes serão executados na aplicação pública SauceDemo utilizando um ambiente local configurado para desenvolvimento e automação dos testes.

| Item | Descrição |
|------|-----------|
| Aplicação | SauceDemo |
| URL | https://www.saucedemo.com |
| Ambiente | Produção (Demo) |
| Navegador | Google Chrome |
| Sistema Operacional | Windows 11 |
| Framework de Automação | Cypress |
| Linguagem | JavaScript |
| Gerenciador de Pacotes | Node.js v20.15.0 / npm 10.7.0|
| Controle de Versão | Git |
| Repositório | GitHub |
| IDE | Visual Studio Code |

**Observação:**

Os testes automatizados serão desenvolvidos utilizando o framework Cypress em ambiente local. Os testes manuais serão executados diretamente na aplicação SauceDemo por meio do navegador Google Chrome, utilizando usuários de demonstração disponibilizados pela própria plataforma.

---

## 7. Critérios de Entrada

A execução dos testes somente será iniciada após a validação dos seguintes critérios:

- A aplicação SauceDemo deve estar disponível e acessível.
- O ambiente de testes deve estar estável e operacional.
- As credenciais de acesso devem estar disponíveis para utilização durante os testes.
- O Plano de Testes deve estar concluído e revisado.
- Os casos de teste devem estar documentados e revisados.
- Os cenários BDD devem estar definidos para os fluxos priorizados.
- O ambiente de automação (Cypress) deve estar configurado e funcional.

> **Observação:** Como este projeto possui caráter demonstrativo, todos os critérios de entrada serão atendidos antes do início da execução dos testes, garantindo a rastreabilidade entre planejamento, documentação, execução manual e automação.

--- 

## 8. Critérios de Saída

A execução dos testes será considerada concluída quando os seguintes critérios forem atendidos:

- Todos os casos de teste planejados tiverem sido executados.
- Os resultados da execução estiverem devidamente registrados.
- Os defeitos identificados estiverem documentados no Relatório de Bugs.
- As evidências da execução dos testes estiverem armazenadas na documentação do projeto.
- Os cenários priorizados estiverem automatizados utilizando Cypress.
- Não existirem defeitos classificados como **Crítico** ou **Alta Severidade** que impeçam a execução dos fluxos principais da aplicação.

---

## 9. Tipos de Testes

Este projeto contempla a execução de diferentes tipos de testes com o objetivo de validar as funcionalidades críticas da aplicação SauceDemo. Cada tipo de teste possui um propósito específico dentro da estratégia de qualidade adotada.

| Tipo de Teste | Aplicável | Objetivo |
|----------------|:---------:|----------|
| Funcional | ✅ | Validar o correto funcionamento das funcionalidades da aplicação. |
| Regressão | ✅ | Garantir que alterações não impactem funcionalidades já validadas. |
| Exploratórios | ✅ | Identificar comportamentos inesperados durante a navegação na aplicação. |
| Testes Manuais | ✅ | Validar os fluxos da aplicação antes da automação. |
| Testes Automatizados | ✅ | Automatizar os principais fluxos utilizando Cypress. |
| Testes de API | ❌ | Não fazem parte do escopo deste projeto. |
| Performance | ❌ | Não contemplado neste ciclo de testes. |
| Carga e Stress | ❌ | Não contemplado neste projeto. |
| Segurança | ❌ | Não contemplado neste projeto. |
| Acessibilidade | ❌ | Não contemplado neste projeto. |
| Compatibilidade entre Navegadores | ❌ | Os testes serão executados apenas no Google Chrome. |
| Responsividade | ❌ | A versão mobile não será validada neste projeto. |

---

## 10. Riscos

Durante a execução dos testes, alguns fatores podem impactar o andamento das atividades ou comprometer os resultados obtidos. Os principais riscos identificados para este projeto são apresentados na tabela abaixo.

| Risco | Impacto | Mitigação |
|--------|----------|-----------|
| Indisponibilidade da aplicação SauceDemo | Alto | Aguardar a normalização do serviço antes de prosseguir com os testes. |
| Alterações na aplicação de demonstração | Médio | Revisar e atualizar os casos de teste e scripts de automação quando necessário. |
| Instabilidade na conexão com a internet | Médio | Garantir uma conexão estável durante a execução dos testes. |
| Mudanças nos elementos da interface (IDs, seletores, etc.) | Médio | Atualizar os localizadores utilizados na automação. |
| Falhas na configuração do ambiente local | Baixo | Validar previamente a instalação e configuração das ferramentas utilizadas. |

---

## 11. Ferramentas Utilizadas

As ferramentas abaixo serão utilizadas durante o desenvolvimento, execução e documentação deste projeto de testes.

| Ferramenta | Finalidade |
|-------------|------------|
| Visual Studio Code | Desenvolvimento e manutenção do projeto. |
| Cypress | Automação dos testes end-to-end (E2E). |
| JavaScript | Linguagem utilizada na implementação dos testes automatizados. |
| Node.js | Ambiente de execução do Cypress e gerenciamento das dependências do projeto. |
| npm | Gerenciamento de pacotes e dependências. |
| Git | Controle de versão do código-fonte. |
| GitHub | Armazenamento do repositório e versionamento do projeto. |
| Google Chrome | Navegador utilizado para execução dos testes. |
| Markdown (.md) | Documentação do projeto (Plano de Testes, Casos de Teste, BDD, Relatório de Bugs e Evidências). |